import { getSellerProductById } from "@/api/seller-api/products";
import { ServerPageProps } from "@/api/server-api/types";
import SellerProductForm from "@/components/seller/forms/seller-product-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateCity({ params }: ServerPageProps) {
  const { id } = await params;
  const product = await getSellerProductById(Number(id));
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش محصول</Typography>
          <SellerProductForm defaultValue={product} />
        </CardContent>
      </Card>
    </Box>
  );
}
