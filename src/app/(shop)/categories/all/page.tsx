"use client";
import FilterSidebar from "@/components/categories/FilterSidebar";
import GetAllProducts from "@/components/GetAllProducts";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
//TODO porom server side
const AllProductPage = () => {
  const param = useParams() as { id: string };
  return (
    <Box>
      <GetAllProducts params={param} />
      <FilterSidebar />
    </Box>
  );
};

export default AllProductPage;
