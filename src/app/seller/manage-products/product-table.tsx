"use client";

import { deleteProductAction } from "@/actions/products";
import { IShopProducts, PaginatedResultApi } from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import { Delete, Edit } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid2,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ProductTable({
  products,
}: {
  products: PaginatedResultApi<IShopProducts>;
}) {
  return (
    <Grid2
      container
      spacing={3}
      sx={{
        padding: "20px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
      }}
    >
      {products.results.map((product) => (
        <ProductCard key={product.code} product={product} />
      ))}
    </Grid2>
  );
}

function ProductCard({ product }: { product: IShopProducts }) {
  const [formattedDate, setFormattedDate] = useState("0");

  useEffect(() => {
    if (product.updatedAt) {
      setFormattedDate(new Date(product.updatedAt).toLocaleDateString("fa"));
    }
  }, [product.updatedAt]);

  return (
    <Card
      elevation={3}
      sx={{ borderRadius: 3, overflow: "hidden", width: "100%", maxWidth: 350 }}
    >
      <CardMedia
        component="img"
        height="160"
        image={product.images.main || "/default-image.jpg"}
        alt={product.titleFa ?? "تصویر محصول"}
        sx={{ objectFit: "cover" }}
      />

      <CardHeader
        title={product.titleFa ?? "نامشخص"}
        subheader={product.titleEn ?? "نامشخص"}
        sx={{ textAlign: "center", bgcolor: "#f5f5f5" }}
      />

      <CardContent>
        <Grid2 container spacing={1}>
          <Grid2>
            <Typography variant="body2">
              <strong>کد محصول:</strong> {product.code}
            </Typography>
            <Typography variant="body2">
              <strong>وضعیت:</strong>{" "}
              {product.status === "marketable" ? "قابل فروش" : "غیر قابل فروش"}
            </Typography>
            <Typography variant="body2">
              <strong>دسته‌بندی:</strong>{" "}
              {product.category?.titleFa ?? "بدون دسته‌بندی"}
            </Typography>
            <Typography variant="body2">
              <strong>برند:</strong> {product.brand?.titleFa ?? "بدون برند"}
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2">
              <strong>قیمت:</strong>{" "}
              {product.bestSeller?.price ? product.bestSeller.price : "نامشخص"}{" "}
              تومان
            </Typography>
            <Typography variant="body2">
              <strong>موجودی:</strong> {product.bestSeller?.count ?? "نامشخص"}
            </Typography>
            <Typography variant="body2">
              <strong>تخفیف:</strong>{" "}
              {product.bestSeller?.discount
                ? `${product.bestSeller.discount}%`
                : "بدون تخفیف"}
            </Typography>
            <Typography variant="body2">
              <strong>بروزرسانی:</strong> {formattedDate}
            </Typography>
          </Grid2>
        </Grid2>
      </CardContent>

      <Stack direction="row" spacing={1} p={2} justifyContent="center">
        <Tooltip title="ویرایش">
          <IconButton
            color="secondary"
            component={Link}
            href={`/seller/manage-products/update/${product.code}`}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="حذف">
          <DeleteAlertDialog
            onConfirm={async () => deleteProductAction(product.id)}
          >
            <IconButton color="error">
              <Delete />
            </IconButton>
          </DeleteAlertDialog>
        </Tooltip>
      </Stack>
    </Card>
  );
}
