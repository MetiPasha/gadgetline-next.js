"use client";
import React from "react";
import { Box, Typography, Chip, Divider } from "@mui/material";
import { LocalOffer, Star, StarBorder } from "@mui/icons-material";

interface Specification {
  name: string;
  value: string;
}

interface BestSeller {
  lastPrice?: number;
  discount?: number;
}

interface ProductInfoProps {
  titleFa: string;
  titleEn: string;
  bestSeller?: BestSeller;
  specifications?: Specification[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  titleFa,
  titleEn,
  bestSeller,
  specifications,
}) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h2" gutterBottom>
        {titleFa}
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        {titleEn}
      </Typography>

      {/* امتیاز و نظرات */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Star sx={{ color: "#FFD700" }} />
          <Star sx={{ color: "#FFD700" }} />
          <Star sx={{ color: "#FFD700" }} />
          <Star sx={{ color: "#FFD700" }} />
          <StarBorder sx={{ color: "#FFD700" }} />
        </Box>
        <Typography variant="subtitle1" color="text.secondary">
          4/5
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            borderRadius: "16px",
            px: 2,
            py: 0.5,
          }}
        >
          <Typography variant="subtitle1" color="text.primary">
            ۵۰ دیدگاه
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            borderRadius: "16px",
            px: 2,
            py: 0.5,
          }}
        >
          <Typography variant="subtitle1" color="text.primary">
            ۳۵ پرسش
          </Typography>
        </Box>
      </Box>

      {/* قیمت و تخفیف */}
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" color="primary">
          {Number(bestSeller?.lastPrice ?? 0).toLocaleString("fa-IR")} تومان
        </Typography>
        <Chip
          icon={<LocalOffer />}
          label={`تخفیف ${bestSeller?.discount ?? 0}%`}
          color="secondary"
          sx={{ mt: 1 }}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* ویژگی‌های محصول */}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" gutterBottom>
          ویژگی‌ها:
        </Typography>
        <Box component="ul" sx={{ pl: 4 }}>
          {specifications && specifications.length > 0 ? (
            specifications.map((spec, index) => (
              <li key={index}>
                <Typography variant="body1">
                  {spec.name}: {spec.value}
                </Typography>
              </li>
            ))
          ) : (
            <Typography variant="body1">ویژگی‌ای موجود نیست.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
