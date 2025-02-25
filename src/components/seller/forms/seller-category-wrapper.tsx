"use client";

import { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, Box } from "@mui/material";

import { ICategory, PaginatedResultApi } from "@/api/server-api/types";
import CategoryTable from "@/app/seller/category/category-table";
import SellerCategoryForm from "./seller-category-form";
export default function CategoryClientWrapper({
  categories,
}: {
  categories: PaginatedResultApi<ICategory>;
}) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );

  const handleOpen = (category?: ICategory) => {
    setSelectedCategory(category || null);
    setOpen(true);
  };

  return (
    <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2, borderRadius: 2, alignSelf: "flex-end" }}
      >
        افزودن دسته‌بندی
      </Button>
      <CategoryTable categories={categories} onEdit={handleOpen} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          {selectedCategory ? "ویرایش دسته‌بندی" : "افزودن دسته‌بندی"}
        </DialogTitle>
        <DialogContent>
          <SellerCategoryForm defaultValue={selectedCategory || undefined} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
