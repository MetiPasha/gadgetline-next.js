"use client";
import { useShopProductsQuery } from "@/components/ByBrands";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const ShopPage: React.FC = () => {
  const { data: products, isLoading, isError } = useShopProductsQuery();
  if (isLoading) {
    return <Typography> در حال دریافت اطلاعات </Typography>;
  }
  if (isError) {
    return <Typography>خطا در دریافت اطلاعات</Typography>;
  }
  console.log(products);
  return (
    <Box>
      <Typography>صفحه فروشگاه</Typography>
      {products?.results.map((product) => (
        <Box key={product.id}>
          <Link href={`/product/${product.code}`}>
            <Typography>{product.titleFa}</Typography>
            <Typography>{product.bestSeller?.lastPrice}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default ShopPage;
