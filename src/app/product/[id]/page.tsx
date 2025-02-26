"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Axios from "@/api/client-api/base";
import { IColor, IShopProducts } from "@/api/server-api/types";
import { Box, Typography, Paper, CircularProgress, Grid } from "@mui/material";

interface ProductDetailProps {
  id: string;
  titleEn: string;
  image: string;
  titleFa: string;
  price: string;
  colors: IColor[];
  review: string;
  specifications: { id: string; value: string }[];
}

async function getProductById(id: string) {
  const res = await Axios.get<IShopProducts>(`/products/${id}`);
  return res.data;
}

export function useProductQuery(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id, // only execute when id is available
  });
}

const ProductDetail = ({
  id,
  titleEn,
  image,
  titleFa,
  price,
  colors,
  review,
  specifications,
}: ProductDetailProps) => {
  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* تصویر محصول */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image || "/default-image.jpg"}
              alt={titleFa}
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* اطلاعات محصول */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              {titleFa}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mt={1}>
              امتیاز ⭐ {review}
            </Typography>
            <Typography variant="h5" color="primary" fontWeight="bold" mt={2}>
              {price} تومان
            </Typography>

            {/* رنگ‌ها */}
            {colors.length > 0 && (
              <Box mt={3}>
                <Typography variant="h6">رنگ‌های موجود:</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  {colors.map((color, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: color.hexCode,
                        border: "1px solid #ccc",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* مشخصات محصول */}
            <Box mt={3}>
              <Typography variant="h6">مشخصات:</Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                {specifications.map((spec, index) => (
                  <li key={index}>
                    <Typography variant="body1">
                      {spec.id}: {spec.value}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductQuery(id as string);

  console.log("Product Data:", product);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !product) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography color="error">خطا در دریافت اطلاعات محصول!</Typography>
      </Box>
    );
  }

  // داده‌ها از API که مطابق با تایپ `IShopProducts` است، استفاده می‌شود
  return (
    <ProductDetail
      id={product.id}
      titleEn={product.titleEn} // استفاده از `titleEn`
      image={product.images.main || "/default-image.jpg"}
      titleFa={product.titleFa}
      price={`${product.bestSeller?.lastPrice ?? 0}`} // یا هر ویژگی از قیمت
      colors={product.colors} // استفاده از `colors` به درستی
      review={product.review}
      specifications={product.specifications} // استفاده از `specifications` که آرایه‌ای از مشخصات است
    />
  );
};

export default ProductDetailPage;