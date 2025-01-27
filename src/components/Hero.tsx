"use client";
import { Box, Typography, Button, useTheme } from "@mui/material";
import React, { useState } from "react";

// تصاویر نمونه
const images: string[] = [
  "/images/image1.jpg", // مسیر تصویر اول
  "/images/image2.jpg", // مسیر تصویر دوم
  "/images/image3.jpg", // مسیر تصویر سوم
  "/images/image4.jpg", // مسیر تصویر چهارم
  "/images/image5.jpg", // مسیر تصویر پنجم
];

const Hero: React.FC = () => {
  const theme = useTheme();

  // وضعیت برای تصویر فعال
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // تغییر تصویر به تصویر بعدی
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // تغییر تصویر به تصویر قبلی
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // به صورت راست به چپ چیده شده
        height: "70vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* گالری تصاویر سمت چپ */}

      {/* متن و دکمه سمت راست */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start", // چیدمان به سمت چپ
          width: "30vw", // کاهش عرض قسمت متن
          marginLeft: "2rem", // فاصله از سمت چپ
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            margin: "1rem",
            marginBottom: "1rem",
            fontSize: "3.5rem",
            textAlign: "left", // متن به سمت چپ
          }}
          variant="h1"
        >
          دنیای گجت ها
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            textAlign: "left", // متن به سمت چپ
            marginLeft: "1rem", // فاصله از سمت چپ
          }}
          variant="body1"
        >
          شما میتوانید با دیدن از محصولات ما بهترین انتخاب را داشته باشین
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start", // چیدمان دکمه به سمت چپ
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "0.5rem 2rem",
              marginLeft: "1rem",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.getContrastText(theme.palette.primary.main),
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            محصولات
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "60vw", // افزایش عرض گالری برای ایجاد فضای بیشتر
          height: "100%",
          marginRight: "2rem", // فاصله از سمت راست
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* تصویر فعلی */}
        <Box
          sx={{
            width: "100%",
            height: "80%", // تنظیم ارتفاع تصویر
            borderRadius: "8px",
            backgroundImage: `url(${images[currentImageIndex]})`, // بارگذاری تصویر از آرایه
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          <Button
            onClick={prevImage}
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              margin: "0 0.5rem",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            قبلی
          </Button>
          <Button
            onClick={nextImage}
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              margin: "0 0.5rem",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            بعدی
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
