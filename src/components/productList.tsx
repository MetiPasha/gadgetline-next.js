"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Cart from "./Cart"; // فرض کنید فایل Cart.tsx در همان دایرکتوری قرار دارد

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductList = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // آرایه محصولات نمونه
  const products: Product[] = [
    {
      id: 1,
      name: "Headphone Z",
      price: 50,
      image: "/assets/home/headphoneZ.jpg",
    },
    // می‌تونی محصولات دیگه هم اضافه کنی
  ];

  // تابع اضافه کردن به سبد خرید
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      // چک می‌کنیم اگر محصول قبلاً اضافه شده
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // افزایش تعداد آیتم موجود
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // افزودن آیتم جدید با تعداد اولیه 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Box>
      <Typography variant="h4">محصولات</Typography>
      {products.map((product) => (
        <Box key={product.id} sx={{ marginBottom: "1rem" }}>
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
          />
          <Typography variant="h6">{product.name}</Typography>
          <Typography>${product.price}</Typography>
          <Button variant="contained" onClick={() => addToCart(product)}>
            افزودن به سبد خرید
          </Button>
        </Box>
      ))}
      {/* ارسال آیتم‌های سبد خرید به کامپوننت Cart */}
      <Cart cartItems={cartItems} />
    </Box>
  );
};

export default ProductList;
