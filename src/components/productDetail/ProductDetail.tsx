"use client";
import React, { useState, useEffect } from "react";
import { Box, Paper, Divider, Button, Typography } from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/api/client-api/base";
import { IShopProducts } from "@/api/server-api/types";
import { useFavorites } from "@/context/FavoriteContext";
import { useCartStore } from "@/store/cartProvider";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductColors from "./ProductColors";
import ProductComments from "./ProductComments";

async function getProductByCode(code: string): Promise<IShopProducts> {
  const res = await Axios.get(`/products/${code}`);
  return res.data;
}

interface ProductDetailProps {
  code: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ code }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<IShopProducts>({
    queryKey: ["product", code],
    queryFn: () => getProductByCode(code),
  });

  const { addToFavorites } = useFavorites();
  const incrementItemCount = useCartStore((state) => state.incrementItemCount);

  const [mainImage, setMainImage] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    if (product && product.images.main) {
      setMainImage(product.images.main);
    } else {
      setMainImage("/default-image.jpg");
    }
  }, [product]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !product)
    return <div>Error: Failed to load product details</div>;

  const thumbnails =
    product.images.list && product.images.list.length > 0
      ? product.images.list
      : [product.images.main];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleAddToFavorites = () => {
    if (product) {
      addToFavorites(product);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor) {
      alert("لطفاً یک رنگ انتخاب کنید.");
      return;
    }
    if (product) {
      const orderItem = {
        product: product,
        productSeller: product.bestSeller ?? { lastPrice: 0, discount: 0 },
        color: selectedColor,
        quantity: 1,
      };

      incrementItemCount(orderItem);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #ffffff, #f2f2f2)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <ProductImages
            mainImage={mainImage}
            thumbnails={thumbnails}
            setMainImage={setMainImage}
            titleFa={product.titleFa}
          />
          <ProductInfo
            titleFa={product.titleFa}
            titleEn={product.titleEn}
            bestSeller={product.bestSeller}
            specifications={product.specifications}
          />
        </Box>

        <ProductColors
          colors={product.colors ?? []}
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
        />

        <Box sx={{ mt: 4, display: "flex", gap: 2, ml: "51%" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCart />}
            sx={{ mr: 2 }}
            onClick={handleAddToCart}
          >
            افزودن به سبد خرید
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<Favorite />}
            onClick={handleAddToFavorites}
          >
            افزودن به علاقه‌مندی‌ها
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            توضیحات محصول:
          </Typography>
          <Typography variant="body1" paragraph>
            {product.expert_review || "توضیحات موجود نیست."}
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <ProductComments
          comments={comments}
          newComment={newComment}
          onNewCommentChange={setNewComment}
          handleAddComment={handleAddComment}
        />
      </Paper>
    </Box>
  );
};

export default ProductDetail;
