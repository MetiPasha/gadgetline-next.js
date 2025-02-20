"use client";
import FilterSidebar from "@/components/categories/FilterSidebar";
import ByBrands from "@/components/GetAllProducts";
import Header from "@/components/home/Header";

import { Box } from "@mui/material";
import { useParams } from "next/navigation";

const LaptopBrandPage = () => {
  const param = useParams() as { id: string };

  console.log("Brand ID:", param.id); // ✅ چک کردن مقدار `id`

  return (
    <Box>
      <Header />
      <ByBrands params={param} />
      <FilterSidebar />
    </Box>
  );
};

export default LaptopBrandPage;

// const { id } = params;
// // لیست برندهای مجاز (اختیاری)
// const validBrands = ["msi", "lenovo", "hp", "asus", "acer", "apple"];
// if (!validBrands.includes(id)) {
//   return notFound(); // اگر برند نامعتبر بود، 404 بده
// }
// return (
//   // <Box>
//   //   <Typography variant="h4">برند: {id}</Typography>
//   //   {/* اینجا می‌تونی کامپوننت نمایش محصولات رو اضافه کنی */}
//   // </Box>
// );
