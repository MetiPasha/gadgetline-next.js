import { getProductById } from "@/api/server-api/products";
import { ServerPageProps } from "@/api/server-api/types";
import ProductForm from "@/components/admin/forms/product-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateProduct({ params }: ServerPageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش محصول</Typography>
          <ProductForm defaultValue={product} />
        </CardContent>
      </Card>
    </Box>
  );
}
