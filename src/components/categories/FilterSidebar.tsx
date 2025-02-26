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
  under200: boolean;
  between200And400: boolean;
  above400: boolean;
}

interface FilterSidebarProps {
  // در صورت نیاز می‌توانید وضعیت فیلتر قیمت را به کامپوننت والد ارسال کنید
  onPriceFilterChange?: (priceFilters: PriceFilters) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onPriceFilterChange,
}) => {
  // وضعیت برای فیلتر کالاهای موجود
  const [showAvailable, setShowAvailable] = useState(false);

  // وضعیت برای فیلتر محدوده قیمت
  const [priceFilters, setPriceFilters] = useState<PriceFilters>({
    under200: false,
    between200And400: false,
    above400: false,
  });

  // تابع برای تغییر وضعیت تیک فیلتر کالاهای موجود
  const handleAvailableChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowAvailable(event.target.checked);
  };

  // تابع برای تغییر وضعیت تیک فیلتر محدوده قیمت
  const handlePriceChange =
    (field: keyof PriceFilters) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFilters = { ...priceFilters, [field]: event.target.checked };
      setPriceFilters(newFilters);
      if (onPriceFilterChange) {
        onPriceFilterChange(newFilters);
      }
    };

  return (
    <Box
      sx={{
        width: 300, // عرض فیلترها
        position: "fixed", // موقعیت ثابت
        top: 0, // در بالای صفحه قرار گیرد
        left: 0, // سمت چپ صفحه (در اینجا همانطور که مدنظر بوده)
        padding: 2, // فاصله داخلی
        height: "100vh", // ارتفاع برابر با صفحه
        overflowY: "auto", // در صورت زیاد بودن فیلترها اسکرول می‌شود
        backgroundColor: "white", // پس‌زمینه سفید
        boxShadow: 2, // سایه برای فیلترها
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
              checked={priceFilters.under200}
              onChange={handlePriceChange("under200")}
            />
          }
          label="زیر ۲۰۰ میلیون"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceFilters.between200And400}
              onChange={handlePriceChange("between200And400")}
            />
          }
          label="۲۰۰ تا ۴۰۰ میلیون"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceFilters.above400}
              onChange={handlePriceChange("above400")}
            />
          }
          label="بیشتر از ۴۰۰ میلیون"
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* فیلتر کالاهای موجود */}
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

      {/* نمایش توضیح در صورت انتخاب فیلتر کالاهای موجود */}
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
