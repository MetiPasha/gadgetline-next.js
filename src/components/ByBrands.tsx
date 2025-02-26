"use client";

import { Box, Grid } from "@mui/material";
import LaptopCard from "@/components/LaptopCard";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/api/client-api/base";
import { IShopProducts, PaginatedResultApi } from "@/api/server-api/types";
import { useParams } from "next/navigation";

async function getShopAllProducts() {
  const res = await Axios.get<PaginatedResultApi<IShopProducts>>("/products", {
    params: { pageSize: 25 },
  });
  return res.data;
}

export function useShopProductsQuery() {
  return useQuery({
    queryKey: ["shop-products"],
    queryFn: () => getShopAllProducts(),
  });
}

function ByBrands() {
  const { id } = useParams(); // استخراج شناسه برند از مسیر
  const { data, isLoading, isError } = useShopProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error: Failed to load products</div>;

  const products = data.results || [];

  const filteredProducts = products.filter(
    (product) => product.brand && product.brand.titleEn === id
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        ml: 30,
        justifyContent: "center",
        mt: 5,
      }}
    >
      {filteredProducts.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item key={product.id}>
              <LaptopCard
                id={product.id}
                image={product.images.main || "/default-image.jpg"}
                title={product.titleFa}
                price={Number(
                  product.bestSeller?.lastPrice ?? 0
                ).toLocaleString("fa-IR")}
                review={
                  product.review && product.review.trim() !== ""
                    ? product.review
                    : "موجودی بالا"
                }
                status={product.status}
                colors={product.colors}
                storage={"1 ترابایت"}
                ram={"32GB"}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>No products found for {id}</div>
      )}
    </Box>
  );
}

export default ByBrands;
