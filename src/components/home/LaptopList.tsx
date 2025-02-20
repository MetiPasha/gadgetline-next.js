import React from "react";
import { Box } from "@mui/material";
import LaptopCard from "../LaptopCard";

const LaptopList = ({}) => {
  const products = [
    {
      image: "assets/home/laptop/asusVivobook1.webp",
      title:
        "لپ تاپ 14 اینچی ایسوس مدل Vivobook Go 14 E410KA-CL464-Celeron N4500-4GB DDR4-64GB eMMC-TN-W",
      storage: "1TB حافظه",
      ram: "64GB رم",
      price: "13,700,000",
    },
    {
      image: "assets/home/laptop/legionPro5.webp",
      title:
        "لپ تاپ 16 اینچی لنوو مدل Legion Pro 5 16IRX9-i7 14650HX-16GB DDR5-1TB SSD-RTX4060-QHD ",
      storage: "1TB حافظه",
      ram: "16GB رم",
      price: "85,900,000",
    },
    {
      image: "assets/home/laptop/asusVivobook2.webp",
      title:
        "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook 15 X515MA-BR001-Celeron N4020-8GB DDR4-512GB SSD-TFT",
      storage: "512GB حافظه",
      ram: "16GB رم",
      price: "32,199,000",
    },
    {
      image: "assets/home/laptop/legionLoq.webp",
      title:
        "لپ تاپ 15.6 اینچی لنوو مدل LOQ 15IRX9-i7 13650HX-24GB DDR5 4800MHz-512GB SSD-RTX4060-FHD",
      storage: "512GB حافظه",
      ram: "24GB رم",
      price: "85,888,000",
    },
  ];

  return (
    <Box
      display="flex"
      gap={3}
      justifyContent="center"
      flexWrap="wrap"
      mt={5}
      sx={{ mr: "5rem" }}
    >
      {products.map((product, index) => (
        <LaptopCard key={index} {...product} />
      ))}
    </Box>
  );
};

export default LaptopList;
