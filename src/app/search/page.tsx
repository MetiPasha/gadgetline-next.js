"use client";

import React from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import LaptopCard from "@/components/LaptopCard";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/api/client-api/base";
import { IShopProducts, PaginatedResultApi } from "@/api/server-api/types";
import { useSearchParams } from "next/navigation";
import Header from "@/components/home/Header"; // ایمپورت هدر

// تابعی برای دریافت کل محصولات از API
async function getShopAllProducts() {
  const res = await Axios.get<PaginatedResultApi<IShopProducts>>("/products", {
    params: { pageSize: 25 },
  });
  return res.data;
}

// هوک مربوط به دریافت محصولات با استفاده از react-query
function useShopProductsQuery() {
  return useQuery({
    queryKey: ["shop-products"],
    queryFn: () => getShopAllProducts(),
  });
}

const SearchPage = () => {
  // دریافت مقدار query از URL
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  // استفاده از هوک برای دریافت محصولات
  const { data, isLoading, isError } = useShopProductsQuery();

  if (isLoading)
    return (
      <Box sx={{ padding: "2rem", textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  if (isError || !data)
    return (
      <Box sx={{ padding: "2rem" }}>
        <Typography color="error">Error: Failed to load products</Typography>
      </Box>
    );

  const products = data.results || [];

  // فیلتر محصولات بر اساس تطابق عنوان (titleFa) با مقدار query
  const filteredProducts = products.filter((product) =>
    product.titleFa.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* هدر اضافه شده */}
      <Header />

      <Box
        sx={{
          padding: "2rem",
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            marginBottom: "2rem",
            textAlign: "center",
            padding: "4rem 2rem",
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", ml: 10, color: "secondary.light" }}
          >
            نتایج جستجو
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ ml: 10, color: "secondary.light" }}
          >
            براساس جستجوی شما: {query}
          </Typography>
        </Box>
        {filteredProducts.length > 0 ? (
          <Grid container spacing={3} justifyContent="center">
            {filteredProducts.map((product) => (
              <Grid item key={product.id}>
                <LaptopCard
                  image={product.images.main || "/default-image.jpg"}
                  title={product.titleFa}
                  price={
                    product.bestSeller?.lastPrice
                      ? Number(product.bestSeller.lastPrice).toLocaleString()
                      : "نامشخص"
                  }
                  color={
                    product.colors.length > 0
                      ? product.colors[0].hexCode
                      : "Default Color"
                  }
                  review={product.review}
                  storage={"نامشخص"}
                  ram={"نامشخص"}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            variant="body1"
            color="error"
            sx={{ textAlign: "center", marginTop: "2rem" }}
          >
            هیچ محصولی پیدا نشد!
          </Typography>
        )}
      </Box>
    </>
  );
};

export default SearchPage;
