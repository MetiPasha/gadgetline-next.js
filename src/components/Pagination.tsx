"use client";

import React from "react";
import { Pagination as MuiPagination, Box } from "@mui/material";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
      <MuiPagination
        count={totalPages} // تعداد صفحات کل
        page={currentPage} // صفحه فعلی
        onChange={(event, value) => onPageChange(value)} // تغییر صفحه
        color="primary"
      />
    </Box>
  );
};

export default Pagination;
