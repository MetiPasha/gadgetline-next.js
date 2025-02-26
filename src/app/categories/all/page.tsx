"use client";
import FilterSidebar from "@/components/categories/FilterSidebar";
import GetAllProducts from "@/components/GetAllProducts";
import Header from "@/components/home/Header";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";

const AllProductPage = () => {
  const param = useParams() as { id: string };
  return (
    <Box>
      <Header />
      <GetAllProducts params={param} />
      <FilterSidebar />
    </Box>
  );
};

export default AllProductPage;
