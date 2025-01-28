"use client";
import { Box, Container, Link, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Button from "./Button";

// Define the Product component
const Product: React.FC = () => {
  // Get access to the theme for styling
  const theme = useTheme(); // Accessing theme to use primary and secondary colors

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center", // Center align the content horizontally
        alignItems: "center", // Center align the content vertically
        direction: "rtl", // Set text direction to right-to-left
      }}
    >
      {/* Product Image */}
      <Image
        src="/assets/home/image-product.jpg" // Path to the product image
        width={500} // Width of the image
        height={500} // Height of the image
        alt="Headphones" // Alt text for the image for accessibility
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Arrange content vertically
          height: "70vh", // Set the height of the content box
          width: "30vw", // Set the width of the content box
          justifyContent: "center", // Center the content vertically within the Box
          marginRight: "8rem", // Add space on the right side
        }}
      >
        {/* Title for the product */}
        <Typography
          sx={{
            transform: "uppercase", // Make the text uppercase
            fontSize: "1.5rem", // Set the font size
            color: "#4f4f4f", // Set the color of the text
            marginBottom: "1rem", // Add margin to the bottom
            textAlign: "left", // Align text to the left
          }}
          variant="h3" // Set the typography variant for header
        >
          محصول جدید
        </Typography>

        {/* Main product name */}
        <Typography
          sx={{
            fontWeight: "700", // Make the text bold
            margin: "1rem", // Add margin around the text
            marginBottom: "1rem", // Add specific bottom margin
            fontSize: "3.5rem", // Set the font size for the product name
            textAlign: "left", // Align the product name to the left
          }}
          variant="h1" // Set the typography variant for main heading
        >
          هدفون xx99 mark
        </Typography>

        {/* Product description */}
        <Typography
          sx={{
            fontSize: "2rem", // Set font size for the description
            marginBottom: "1rem", // Add bottom margin
            textAlign: "left", // Align text to the left
          }}
          variant="body1" // Set the typography variant for body text
        >
          یکی از جدید ترین و پر قدرت های این روز ها هدفون مارک با کیفیت و قیمتی
          باورنکردنی همین حالا خریداری کنید
        </Typography>

        {/* Button to view the product */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained" // Button variant for filled button
            sx={{
              backgroundColor: theme.palette.primary.main, // Set button background color from the theme
              color: theme.palette.common.white, // Set the text color to white
              "&:hover": {
                backgroundColor: theme.palette.primary.dark, // Change background color on hover
              },
            }}
          >
            دیدن محصول
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
