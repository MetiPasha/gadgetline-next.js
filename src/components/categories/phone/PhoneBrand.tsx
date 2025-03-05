"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const PhoneBrand = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "2rem 1rem" }}>
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
            گوشی های مخصوص عکاسی را همین حالا بررسی کن!
          </Typography>
        </Box>
        <Box>
          <CardMedia
            component="img"
            image="/assets/phone/Pcustom.webp"
            alt="Phone Banner"
            sx={{ width: "500px", height: "200px", borderRadius: "4px" }}
          />
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
        <Typography variant="h5" fontWeight="bold">
          خرید بر اساس برند
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop="1rem">
          {["apple", "samsung"].map((brand) => (
            <Grid item key={brand}>
              <Link href={`/categories/phone/${brand}`} passHref>
                <Card
                  sx={{
                    width: "300px",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: theme.shadows[2],
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`/assets/phone/${brand}.webp`}
                    alt={brand}
                    sx={{ width: "350px", objectFit: "contain" }}
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

export default PhoneBrand;
