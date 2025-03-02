"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  TextField,
} from "@mui/material";
import { LocalOffer, ShoppingCart, Favorite } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/api/client-api/base";
import { IShopProducts } from "@/api/server-api/types";

async function getProductByCode(code: string): Promise<IShopProducts> {
  const res = await Axios.get(`/products/${code}`);
  return res.data;
}

interface ProductDetailProps {
  code: string;
}

const ProductDetailll: React.FC<ProductDetailProps> = ({ code }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<IShopProducts>({
    queryKey: ["product", code],
    queryFn: () => getProductByCode(code),
  });

  const [mainImage, setMainImage] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    if (product && product.images.main) {
      setMainImage(product.images.main);
    } else {
      setMainImage("/default-image.jpg"); // تصویر پیش‌فرض
    }
  }, [product]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !product)
    return <div>Error: Failed to load product details</div>;

  // استفاده از product.images.list برای تصاویر ثانویه، در غیر این صورت از تصویر اصلی استفاده می‌شود.
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

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            {mainImage ? (
              <Box
                component="img"
                src={mainImage}
                alt={product.titleFa}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  marginBottom: "1rem",
                }}
              />
            ) : (
              <Typography variant="body2" color="text.secondary">
                تصویر موجود نیست.
              </Typography>
            )}

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {thumbnails.map((thumbnail, index) =>
                thumbnail ? (
                  <Box
                    key={index}
                    component="img"
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImage(thumbnail)}
                    sx={{
                      width: "70px",
                      height: "70px",
                      borderRadius: 1,
                      cursor: "pointer",
                      border:
                        mainImage === thumbnail
                          ? "2px solid #1976d2"
                          : "2px solid transparent",
                      transition: "border 0.3s ease",
                    }}
                  />
                ) : null
              )}
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              {product.titleFa}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              امتیاز ⭐ N/A
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="h5" color="primary">
                {Number(product.bestSeller?.lastPrice ?? 0).toLocaleString(
                  "fa-IR"
                )}{" "}
                تومان
              </Typography>
              {product.badges && (
                <Chip
                  icon={<LocalOffer />}
                  label="تخفیف ویژه"
                  color="secondary"
                  sx={{ mt: 1 }}
                />
              )}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                ویژگی‌ها:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                {product.specifications && product.specifications.length > 0 ? (
                  product.specifications.map((spec, index) => (
                    <li key={index}>
                      <Typography variant="body1">
                        {spec.name}: {spec.value}
                      </Typography>
                    </li>
                  ))
                ) : (
                  <Typography variant="body1">ویژگی‌ای موجود نیست.</Typography>
                )}
              </Box>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                رنگ‌بندی محصول:
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {product.colors && product.colors.length > 0 ? (
                  product.colors.map((color) => (
                    <Box
                      key={color.hexCode}
                      onClick={() => handleColorChange(color.hexCode)}
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: color.hexCode,
                        cursor: "pointer",
                        border:
                          selectedColor === color.hexCode
                            ? "3px solid #1976d2"
                            : "none",
                        transition: "border 0.3s ease",
                      }}
                    />
                  ))
                ) : (
                  <Typography variant="body1">رنگ‌بندی موجود نیست.</Typography>
                )}
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
                sx={{ mr: 2 }}
              >
                افزودن به سبد خرید
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Favorite />}
              >
                افزودن به علاقه‌مندی‌ها
              </Button>
            </Box>
          </Box>
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

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            نظرات کاربران:
          </Typography>

          <Box sx={{ my: 2 }}>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    کاربر {index + 1}:
                  </Typography>
                  <Typography variant="body1">{comment}</Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body1" color="text.secondary">
                هنوز نظری ثبت نشده است.
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 2 }}>
            <TextField
              label="نظر خود را بنویسید"
              fullWidth
              multiline
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddComment}
              >
                ارسال نظر
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDetailll;
