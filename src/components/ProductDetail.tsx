import React from "react";
import { Box, Typography, Button, Paper, Divider, Chip } from "@mui/material";
import { LocalOffer, ShoppingCart, Favorite } from "@mui/icons-material";

const ProductDetail: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* بخش اصلی با Flexbox */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* بخش تصویر محصول */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src="/path/to/product-image.png" // آدرس تصویر محصول
              alt="Product Image"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Box>

          {/* بخش جزئیات محصول */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              هدفون xx99 Mark
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              شاهکار
            </Typography>

            {/* قیمت محصول */}
            <Box sx={{ my: 2 }}>
              <Typography variant="h5" color="primary">
                $50
              </Typography>
              <Chip
                icon={<LocalOffer />}
                label="تخفیف ویژه"
                color="secondary"
                sx={{ mt: 1 }}
              />
            </Box>

            {/* Divider برای جدا کردن بخش‌ها */}
            <Divider sx={{ my: 2 }} />

            {/* ویژگی‌های محصول */}
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                ویژگی‌ها:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <li>
                  <Typography variant="body1">دی گوشی</Typography>
                </li>
                <li>
                  <Typography variant="body1">بو گوشی</Typography>
                </li>
                <li>
                  <Typography variant="body1">دی اسان</Typography>
                </li>
                <li>
                  <Typography variant="body1">مرسم</Typography>
                </li>
              </Box>
            </Box>

            {/* Divider برای جدا کردن بخش‌ها */}
            <Divider sx={{ my: 2 }} />

            {/* دکمه‌های اقدام */}
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
                sx={{ mr: 2 }}
              >
                افزودن به سبد خرید
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Favorite />}
              >
                افزودن به علاقه‌مندی‌ها
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Divider برای جدا کردن بخش توضیحات بیشتر */}
        <Divider sx={{ my: 4 }} />

        {/* بخش توضیحات بیشتر */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            توضیحات محصول:
          </Typography>
          <Typography variant="body1" paragraph>
            هدفون XX99 Mark یکی از بهترین گزینه‌های موجود برای علاقه‌مندان به
            صدای باکیفیت است. این هدفون با طراحی مدرن و ارگونومیک، تجربه‌ای راحت
            و دلپذیر برای استفاده طولانی‌مدت فراهم می‌کند
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
