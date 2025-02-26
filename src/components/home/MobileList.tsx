import React from "react";
import { Box } from "@mui/material";
import MobileCard from "../MobileCard";

const MobileList = () => {
  const products = [
    {
      image: "assets/home/mobile/galaxyA15.webp",
      title:
        "گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
      storage: "128GB حافظه",
      ram: "6GB رم",
      price: "12,400,000",
    },
    {
      image: "assets/home/mobile/galaxyA05s.webp",
      title:
        "گوشی موبایل سامسونگ مدل Galaxy A05s دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
      storage: "128GB حافظه",
      ram: "6GB رم",
      price: "10,190,000",
    },
    {
      image: "assets/home/mobile/galaxyA35.webp",
      title:
        "گوشی موبایل سامسونگ مدل Galaxy A35 دو سیم کارت ظرفیت 128 گیگابایت رم 8 گیگابایت",
      storage: "128GB حافظه",
      ram: "8GB رم",
      price: "19,990,000",
    },
    {
      image: "assets/home/mobile/galaxyA55.jpg",
      title:
        "گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      storage: "128GB حافظه",
      ram: "8GB رم",
      price: "24,100,000",
    },
  ];

  return (
    <Box
      display="flex"
      gap={3}
      justifyContent="center"
      flexWrap="wrap"
      sx={{ mr: "5rem" }}
    >
      {products.map((product, index) => (
        <MobileCard key={index} {...product} />
      ))}
    </Box>
  );
};

export default MobileList;
