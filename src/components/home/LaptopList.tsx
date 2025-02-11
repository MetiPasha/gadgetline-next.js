import React from "react";
import { Box } from "@mui/material";
import LaptopCard from "../LaptopCard";

const LaptopList = () => {
  const products = [
    {
      image: "assets/home/laptop/laptop1.webp",
      title:
        "لپ تاپ 14 اینچی ایسوس مدل Vivobook Go 14 E410KA-CL464-Celeron N4500-4GB DDR4-64GB eMMC-TN-W",
      storage: "512GB حافظه",
      ram: "12GB رم",
      price: "32,199,000",
    },
    {
      image: "assets/home/laptop/laptop1.webp",
      title:
        "لپ تاپ 14 اینچی ایسوس مدل Vivobook Go 14 E410KA-CL464-Celeron N4500-4GB DDR4-64GB eMMC-TN-W",
      storage: "512GB حافظه",
      ram: "12GB رم",
      price: "32,199,000",
    },
    {
      image: "assets/home/laptop/laptop1.webp",
      title:
        "لپ تاپ 14 اینچی ایسوس مدل Vivobook Go 14 E410KA-CL464-Celeron N4500-4GB DDR4-64GB eMMC-TN-W",
      storage: "512GB حافظه",
      ram: "12GB رم",
      price: "32,199,000",
    },
  ];

  return (
    <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap" mt={5}>
      {products.map((product, index) => (
        <LaptopCard key={index} {...product} />
      ))}
    </Box>
  );
};

export default LaptopList;
