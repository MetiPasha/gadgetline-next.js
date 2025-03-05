"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link"; // Import Link for navigation

const Product: React.FC = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
      }}
    >
      {/* Product Image with Border Radius */}
      <Box sx={{ borderRadius: "8px", overflow: "hidden" }}>
        <Image
          src="/assets/home/image-product.jpg"
          width={500}
          height={500}
          alt="Headphones"
          style={{ borderRadius: "8px" }} // Border-radius for image
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          width: "30vw",
          justifyContent: "center",
          marginRight: "8rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            color: "#4f4f4f",
            marginBottom: "1rem",
            textAlign: "left",
          }}
          variant="h3"
        >
          محصول جدید
        </Typography>

        <Typography
          sx={{
            fontWeight: "700",
            margin: "1rem",
            marginBottom: "1rem",
            fontSize: "3.5rem",
            textAlign: "left",
          }}
          variant="h1"
        >
          هدفون xx99 mark
        </Typography>

        <Typography
          sx={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "left",
          }}
          variant="body1"
        >
          یکی از جدید ترین و پر قدرت های این روز ها هدفون مارک با کیفیت و قیمتی
          باورنکردنی همین حالا خریداری کنید
        </Typography>

        {/* Button with Border Radius */}
        <Box
          sx={{ display: "flex", alignItems: "center", marginRight: "2rem" }}
        >
          <Link href="/product" passHref legacyBehavior>
            <a>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  borderRadius: "8px", // Border-radius for button
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                دیدن محصول
              </Button>
            </a>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
