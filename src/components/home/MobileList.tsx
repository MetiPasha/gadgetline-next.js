import React from "react";
import { Box } from "@mui/material";
import MobileCard from "../MobileCard";

const MobileList = () => {
  const products = [
    {
      image: "assets/home/mobile/phone1.webp",
      title:
        "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت",
      storage: "512GB حافظه",
      ram: "12GB رم",
      price: "32,199,000",
    },
    {
      image: "assets/home/mobile/phone1.webp",
      title:
        "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت",
      storage: "512GB حافظه",
      ram: "12GB رم",
      price: "32,199,000",
    },
    {
      image: "assets/home/mobile/phone1.webp",
      title:
        "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت",
      storage: "512GB حافظه",
      ram: "12GB رم",
      price: "32,199,000",
    },
  ];

  return (
    <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap">
      {products.map((product, index) => (
        <MobileCard key={index} {...product} />
      ))}
    </Box>
  );
};

export default MobileList;
