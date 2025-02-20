import { getProductByCode } from "@/api/server-api/shop/shopProduct";
import { Box } from "@mui/material";

const ProductPage = async ({ params }) => {
  const { code } = params;
  const product = await getProductByCode(Number(code));
  return (
    <Box>
      <h1>{product?.titleFa}</h1>
      <p>Product Code: {code}</p>
    </Box>
  );
};

export default ProductPage;
