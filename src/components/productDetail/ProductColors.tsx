"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

interface Color {
  hexCode: string;
}

interface ProductColorsProps {
  colors: Color[];
  selectedColor: string;
  handleColorChange: (color: string) => void;
}

const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  selectedColor,
  handleColorChange,
}) => {
  return (
    <Box sx={{ my: 2, ml: "51%" }}>
      <Typography variant="h5" gutterBottom>
        رنگ‌بندی محصول:
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {colors && colors.length > 0 ? (
          colors.map((color) => (
            <Box
              key={color.hexCode}
              onClick={() => handleColorChange(color.hexCode)}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: color.hexCode,
                cursor: "pointer",
                border:
                  selectedColor === color.hexCode
                    ? "3px solid #1976d2"
                    : "none",
                transition: "border 0.3s ease",
              }}
            />
          ))
        ) : (
          <Typography variant="body1">رنگ‌بندی موجود نیست.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductColors;
