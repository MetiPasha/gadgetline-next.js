// import { ServerPageProps } from "@/api/server-api/types";
// import { getProductByCode } from "./taqi";
// import { Container } from "@mui/material";
// import ProductDetaill from "@/components/ProductDtaill";

// export default async function Page({ params }: ServerPageProps) {
//   const code = await params;
//   console.log(code);
//   const product = await getProductByCode(Number(code));
//   return (
//     <Container maxWidth="xl">
//       <ProductDetaill product={product} />
//     </Container>
//   );
// }

"use client";
import Header from "@/components/home/Header";
import ProductDetailll from "@/components/ProductDtail";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams() as { code: string };

  console.log("Product Code:", params.code);

  return (
    <Box>
      <Header />
      <ProductDetailll code={params.code} />
    </Box>
  );
};

export default ProductPage;
