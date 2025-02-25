import React from "react";
import { ProductTable } from "./product-table";
import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/seller/tables/TableContainer";
import { getSellerProducts } from "@/api/seller-api/products";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const products = await getSellerProducts(params);
  return (
    <TableContainer title="محصول" createLink="/seller/manage-products/create">
      <ProductTable products={products} />
    </TableContainer>
  );
}
