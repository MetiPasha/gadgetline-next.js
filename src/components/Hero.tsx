"use client";
import { Box, Typography, Button, useTheme } from "@mui/material";
import React, { useState } from "react";

// Sample images array - replace with actual image paths
const images: string[] = [
  "/images/image1.jpg", // path to the first image
  "/images/image2.jpg", // path to the second image
  "/images/image3.jpg", // path to the third image
  "/images/image4.jpg", // path to the fourth image
  "/images/image5.jpg", // path to the fifth image
];

const Hero: React.FC = () => {
  // Accessing the theme for styling
  const theme = useTheme();

  // State to track the current active image index
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Function to change to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to change to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex", // Use flexbox for layout
        flexDirection: "row", // Display images and text side by side
        height: "70vh", // Set the height of the container
        width: "100%", // Full width of the container
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically
      }}
    >
      {/* Text and button section on the right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Align items vertically
          justifyContent: "center", // Center items vertically
          alignItems: "flex-start", // Align items to the left
          width: "30vw", // Set width to 30% of the viewport
          marginLeft: "2rem", // Margin to the left side
        }}
      >
        {/* Main title */}
        <Typography
          sx={{
            fontWeight: "700", // Bold font weight
            margin: "1rem", // Margin around the title
            marginBottom: "1rem", // Bottom margin
            fontSize: "3.5rem", // Set font size for title
            textAlign: "left", // Align text to the left
          }}
          variant="h1"
        >
          دنیای گجت ها
        </Typography>

        {/* Description text */}
        <Typography
          sx={{
            fontSize: "1.5rem", // Font size for the description
            marginBottom: "1.5rem", // Margin below the description
            textAlign: "left", // Align text to the left
            marginLeft: "1rem", // Left margin for the description
          }}
          variant="body1"
        >
          شما میتوانید با دیدن از محصولات ما بهترین انتخاب را داشته باشین
        </Typography>

        {/* Button for navigation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start", // Align button to the left
            width: "100%", // Full width of the container
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "0.5rem 2rem", // Padding inside the button
              marginLeft: "1rem", // Left margin for the button
              backgroundColor: theme.palette.primary.main, // Button background color
              color: theme.palette.getContrastText(theme.palette.primary.main), // Text color for contrast
              "&:hover": {
                backgroundColor: theme.palette.primary.dark, // Hover effect
              },
            }}
          >
            محصولات
          </Button>
        </Box>
      </Box>

      {/* Image gallery section on the left */}
      <Box
        sx={{
          width: "60vw", // Increase width of the image gallery
          height: "100%", // Full height of the container
          marginRight: "2rem", // Right margin to create space between sections
          display: "flex",
          flexDirection: "column", // Align items vertically
          alignItems: "center", // Center the items horizontally
          justifyContent: "center", // Center the content vertically
        }}
      >
        {/* Display current image */}
        <Box
          sx={{
            width: "100%", // Full width of the box
            height: "80%", // Set image height to 80% of the container
            borderRadius: "8px", // Rounded corners for the image
            backgroundImage: `url(${images[currentImageIndex]})`, // Set background image based on current index
            backgroundSize: "cover", // Ensure image covers the entire box
            backgroundPosition: "center", // Center the image
          }}
        />

        {/* Buttons to navigate through images */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          <Button
            onClick={prevImage} // Call function to go to previous image
            sx={{
              backgroundColor: theme.palette.primary.dark, // Button background color
              color: "white", // Text color
              margin: "0 0.5rem", // Horizontal margin for buttons
              "&:hover": {
                backgroundColor: theme.palette.primary.main, // Hover effect
              },
            }}
          >
            قبلی
          </Button>
          <Button
            onClick={nextImage} // Call function to go to next image
            sx={{
              backgroundColor: theme.palette.primary.dark, // Button background color
              color: "white", // Text color
              margin: "0 0.5rem", // Horizontal margin for buttons
              "&:hover": {
                backgroundColor: theme.palette.primary.main, // Hover effect
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
