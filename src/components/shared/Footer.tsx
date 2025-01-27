"use client";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// Define the Footer component
const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "2rem 0", // Add padding to the top and bottom of the footer
        color: "white", // Set text color to white
        backgroundColor: "#191919", // Set background color
        direction: "rtl", // Right to left text direction
      }}
    >
      <Container>
        {/* Decorative line */}
        <Box
          sx={{
            backgroundColor: "#d87d4a", // Line color
            height: "0.25rem", // Line height
            width: "7rem", // Line width
            position: "relative", // Position relative to other elements
            top: "-32px", // Offset from the top
          }}
        />
        {/* Header and navigation links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Align items vertically at the center
            justifyContent: "space-between", // Space out items
          }}
        >
          <Link href="/">
            <Image
              src="./assets/shared/desktop/logo.svg" // Path to logo
              alt="logo"
              width={150} // Logo width
              height={30} // Logo height
            />
          </Link>
          <ul
            style={{
              textTransform: "uppercase",
              textDecoration: "none",
              display: "flex",
            }}
          >
            {/* Navigation Links */}
            <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
              صفحه اصلی
            </Link>
            <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
              هدفون‌ها
            </Link>
            <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
              اسپیکرها
            </Link>
            <Link href="/" style={{ fontWeight: 700 }}>
              ایرفون‌ها
            </Link>
          </ul>
        </Box>

        {/* Footer text and social media icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Space out the text and social media icons
            marginTop: "1rem",
            alignItems: "flex-end", // Align the items to the bottom
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#8d8d8d", // Light gray color for text
              fontSize: "1rem", // Font size
              maxWidth: "30rem", // Max width for text
              textAlign: "right", // Right-align the text
            }}
          >
            Audiophile یک ایستگاه یکپارچه برای رفع نیازهای صوتی شماست. ما یک تیم
            کوچک از علاقه‌مندان به موسیقی و متخصصان صدا هستیم که به شما کمک
            می‌کنیم تا از صدای شخصی خود بیشترین بهره را ببرید. به مرکز نمایشگاهی
            ما بیایید - ما 7 روز هفته باز هستیم.
          </Typography>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex" }}>
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook-icon"
              width={25} // Icon width
              height={25} // Icon height
            />
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter-icon"
              width={25} // Icon width
              height={25} // Icon height
              style={{ marginLeft: "1rem" }} // Add space between icons
            />
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram-icon"
              width={25} // Icon width
              height={25} // Icon height
              style={{ marginLeft: "1rem" }} // Add space between icons
            />
          </Box>
        </Box>

        {/* Copyright text */}
        <Typography
          variant="body1"
          sx={{
            color: "#8d8d8d", // Light gray color for text
            fontSize: "1rem", // Font size
            maxWidth: "30rem", // Max width for text
            marginTop: "4rem", // Margin top for spacing
            textAlign: "right", // Right-align the text
          }}
        >
          Copyright 2021. تمامی حقوق محفوظ است.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
