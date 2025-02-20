"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

const FilterSidebar: React.FC = () => {
  // وضعیت برای فیلتر کالاهای موجود
  const [showAvailable, setShowAvailable] = useState(false);

  // تابع برای تغییر وضعیت تیک فیلتر
  const handleAvailableChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowAvailable(event.target.checked);
  };

  return (
    <Box
      sx={{
        width: 300, // عرض فیلترها
        position: "fixed", // موقعیت ثابت
        top: 0, // در بالای صفحه قرار گیرد
        left: 0, // سمت راست صفحه
        padding: 2, // فاصله داخلی
        height: "100vh", // ارتفاع برابر با صفحه
        overflowY: "auto", // برای اینکه در صورت زیاد بودن فیلترها اسکرول بشه
        backgroundColor: "white", // پس‌زمینه سفید برای فیلترها
        boxShadow: 2, // سایه برای بخش فیلترها
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
        <FormControlLabel control={<Checkbox />} label="زیر ۲۰ میلیون" />
        <FormControlLabel control={<Checkbox />} label="۲۰ تا ۳۰ میلیون" />
        <FormControlLabel control={<Checkbox />} label="بیشتر از ۳۰ میلیون" />
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

      {/* نمایش محتوا بر اساس فیلتر کالاهای موجود */}
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
