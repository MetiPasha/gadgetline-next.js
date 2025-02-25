"use client";

import { ICategory, PaginatedResultApi } from "@/api/server-api/types";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import { deleteSellerCategoryAction } from "@/actions/seller/seller-category";

type Props = {
  categories: PaginatedResultApi<ICategory>;
  onEdit: (category: ICategory) => void;
};

export default function CategoryTable({ categories, onEdit }: Props) {
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}
    >
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              نام فارسی
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              نام انگلیسی
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              عملیات
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categories?.results.length ? (
            categories.results.map((category) => (
              <TableRow key={category.id} hover>
                <TableCell sx={{ textAlign: "center" }}>
                  {category.titleFa}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {category.titleEn}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <IconButton color="primary" onClick={() => onEdit(category)}>
                    <Edit />
                  </IconButton>
                  <DeleteAlertDialog
                    onConfirm={async () =>
                      deleteSellerCategoryAction(category.id)
                    }
                  >
                    <IconButton color="error">
                      <Delete />
                    </IconButton>
                  </DeleteAlertDialog>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={3}
                sx={{
                  textAlign: "center",
                  py: 2,
                  fontSize: "0.9rem",
                  color: "gray",
                }}
              >
                دسته‌بندی‌ای یافت نشد!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
