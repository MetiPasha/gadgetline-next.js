"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

interface ProductImagesProps {
  mainImage: string;
  thumbnails: string[];
  setMainImage: (image: string) => void;
  titleFa: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({
  mainImage,
  thumbnails,
  setMainImage,
  titleFa,
}) => {
  return (
    <Box sx={{ flex: 1 }}>
      {mainImage ? (
        <Box
          component="img"
          src={mainImage}
          alt={titleFa}
          sx={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "contain",
            borderRadius: 2,
            marginBottom: 2,
          }}
        />
      ) : (
        <Typography variant="body2" color="text.secondary">
          تصویر موجود نیست.
        </Typography>
      )}
      <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 1 }}>
        {thumbnails.map((thumbnail, index) =>
          thumbnail ? (
            <Box
              key={index}
              component="img"
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(thumbnail)}
              sx={{
                width: "70px",
                height: "70px",
                borderRadius: 1,
                cursor: "pointer",
                border:
                  mainImage === thumbnail
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                transition: "border 0.3s ease, transform 0.3s ease",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
          ) : null
        )}
      </Box>
    </Box>
  );
};

export default ProductImages;
