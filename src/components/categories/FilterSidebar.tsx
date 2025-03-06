"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

interface PriceFilters {
  under20: boolean;
  between20And40: boolean;
  above40: boolean;
}

interface FilterSidebarProps {
  onPriceFilterChange?: (priceFilters: PriceFilters) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onPriceFilterChange,
}) => {
  const [showAvailable, setShowAvailable] = useState(false);
  const [priceFilters, setPriceFilters] = useState<PriceFilters>({
    under20: false,
    between20And40: false,
    above40: false,
  });

  const handleAvailableChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowAvailable(event.target.checked);
  };

  const handlePriceChange =
    (field: keyof PriceFilters) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFilters = { ...priceFilters, [field]: event.target.checked };
      setPriceFilters(newFilters);
      onPriceFilterChange?.(newFilters);
    };

  return (
    <Box
      sx={{
        width: 300,
        position: "fixed",
        top: 0,
        left: 0,
        padding: 2,
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "white",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        فیلترها
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          رنگ
        </Typography>
        <FormControlLabel control={<Checkbox />} label="مشکی" />
        <FormControlLabel control={<Checkbox />} label="نقره‌ای" />
        <FormControlLabel control={<Checkbox />} label="سفید" />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          ارسال رایگان
        </Typography>
        <FormControlLabel control={<Checkbox />} label="فقط ارسال رایگان" />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          محدوده قیمت
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={priceFilters.under20}
              onChange={handlePriceChange("under20")}
            />
          }
          label="زیر ۲۰ میلیون"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceFilters.between20And40}
              onChange={handlePriceChange("between20And40")}
            />
          }
          label="۲۰ تا ۴۰ میلیون"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceFilters.above40}
              onChange={handlePriceChange("above40")}
            />
          }
          label="بیشتر از ۴۰ میلیون"
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          کالاهای موجود
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={showAvailable}
              onChange={handleAvailableChange}
            />
          }
          label="فقط کالاهای موجود"
        />
      </Box>

      {showAvailable && (
        <Box>
          <Typography variant="body2" color="text.secondary">
            فقط کالاهایی که در انبار موجود هستند نشان داده می‌شود.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FilterSidebar;
