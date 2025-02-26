import { Box, Grid } from "@mui/material";
import LaptopCard from "@/components/LaptopCard";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/api/client-api/base";
import { IShopProducts, PaginatedResultApi } from "@/api/server-api/types";

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

function GetAllProducts() {
  const { data, isLoading, isError } = useShopProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error: Failed to load products</div>;

  const products = data.results || [];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        ml: 36,
        justifyContent: "center",
        mt: 3,
      }}
    >
      {products.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => {
            return (
              <Grid item key={product.id}>
                <LaptopCard
                  image={product.images.main || "/default-image.jpg"}
                  title={product.titleFa}
                  price={"32,199,000"}
                  storage={"نامشخص"}
                  ram={"نامشخص"}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>No products found</div>
      )}
    </Box>
  );
}

export default GetAllProducts;
