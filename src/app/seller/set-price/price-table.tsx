"use client";

import { IShopProducts, PaginatedResultApi } from "@/api/server-api/types";
import { FormatPrice } from "@/components/formatPrice";
import EditProductModal from "@/components/priceModal";
import AITable from "@/components/seller/tables/AITable";
import { Button } from "@mui/material";
import { use, useState } from "react";

export default function PriceProductList({
  products,
}: {
  products: Promise<PaginatedResultApi<IShopProducts>>;
}) {
  const [editProduct, setEditProduct] = useState<IShopProducts | null>(null);

  const handleUpdateProduct = (updatedProduct: IShopProducts) => {
    setEditProduct(null);
  };

  // بررسی مقدار products قبل از استفاده
  let allProducts: PaginatedResultApi<IShopProducts> | null = null;
  try {
    allProducts = use(products);
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
  }

  if (!allProducts) {
    return <p>در حال بارگذاری محصولات...</p>;
  }

  return (
    <>
      <AITable
        data={allProducts}
        schema={[
          {
            title: "کد",
            render: (row) => row.code,
          },
          {
            title: "نام فارسی",
            render: (row) => row.titleFa ?? "نامشخص",
          },
          {
            title: "قیمت",
            render: (row) => FormatPrice(row.bestSeller?.price ?? 0),
          },
          {
            title: "دسته‌بندی",
            render: (row) => row.category?.titleFa ?? "بدون دسته‌بندی",
          },
          {
            title: "برند",
            render: (row) => row.brand?.titleFa ?? "بدون برند",
          },
          {
            title: "وضعیت",
            render: (row) =>
              row.status === "marketable" ? "قابل فروش" : "ناموجود",
          },
        ]}
        actions={(row) => (
          <Button onClick={() => setEditProduct(row)} color="primary">
            ویرایش قیمت
          </Button>
        )}
      />

      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onUpdate={handleUpdateProduct}
        />
      )}
    </>
  );
}
