"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  useTheme,
} from "@mui/material";
import Link from "next/link"; // ✅ اضافه کردن لینک برای مسیریابی

const LaptopBrand = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "2rem 1rem" }}>
      {/* بنر اصلی */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: theme.palette.background.default,
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: theme.shadows[2],
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            کاربردی‌تر بخر
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            لپ‌تاپ‌های کاستوم را همین حالا بررسی کن!
          </Typography>
        </Box>
        <Box>
          <CardMedia
            component="img"
            image="/assets/laptop/Lcustom.jpg"
            alt="Laptop Banner"
            sx={{ width: "470px", height: "200px", borderRadius: "4px" }}
          />
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
        <Typography variant="h5" fontWeight="bold">
          خرید بر اساس برند
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop="1rem">
          {["msi", "lenovo", "hp", "asus", "acer", "apple"].map((brand) => (
            <Grid item key={brand}>
              <Link href={`/categories/laptop/${brand}`} passHref>
                <Card
                  sx={{
                    width: "120px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: theme.shadows[1],
                    cursor: "pointer", // ✅ نشانگر موس کلیک‌شو
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" }, // ✅ افکت هاور برای جذابیت بیشتر
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`/assets/laptop/${brand}.png`}
                    alt={brand}
                    sx={{ width: "80px", objectFit: "contain" }}
                  />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LaptopBrand;
