import PriceProductList from "./price-table";
import { getSellerProducts } from "@/api/seller-api/products";
import { ServerPageProps } from "@/api/server-api/types";
import { Card, Typography } from "@mui/material";

export default async function MyProductsPage({
  searchParams,
}: ServerPageProps) {
  const params = await searchParams;
  const product = getSellerProducts(params);

  return (
    <Card>
      <Typography sx={{ fontSize: "36px", fontWeight: 700, padding: "20px 0" }}>
        محصولات من
      </Typography>
      <PriceProductList products={product} />
    </Card>
  );
}
