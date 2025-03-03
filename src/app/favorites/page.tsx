"use client";
import { useFavorites } from "@/context/FavoriteContext";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { IShopProducts } from "@/api/server-api/types";
import Header from "@/components/home/Header"; // هدر را وارد می‌کنیم

const FavoritesPage = () => {
  // Accessing the context for favorites and removing from favorites
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // Gradient background added
        minHeight: "100vh", // Full height of the page
        display: "flex", // Flexbox to align the content
        flexDirection: "column", // Stack items vertically
      }}
    >
      <Header />
      <Box sx={{ padding: 2, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 5 }}>
          علاقه‌مندی‌های شما
        </Typography>

        {/* Check if favorites list is empty */}
        {favorites.length === 0 ? (
          <Typography>هیچ محصولی به علاقه‌مندی‌ها اضافه نکردید.</Typography>
        ) : (
          // Grid layout for showing the list of favorites
          <Grid container spacing={1} justifyContent="center">
            {" "}
            {/* Added justifyContent="center" to center the items */}
            {favorites.map((product: IShopProducts) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                {" "}
                {/* Changed to 3 for 4 items in a row */}
                <Card
                  sx={{
                    maxWidth: 345,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                    margin: "0 auto", // Center the card horizontally
                    "&:hover": {
                      transform: "scale(1.05)", // Slight zoom effect on hover
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Add a shadow effect
                    },
                  }}
                >
                  {/* Display product image */}
                  <CardMedia
                    component="img"
                    image={product.images.main} // Main image of the product
                    alt={product.titleFa}
                    loading="lazy"
                    sx={{
                      objectFit: "contain", // Ensures the image fits within the Card without cropping
                      width: "100%", // Make sure the image takes the full width of the card
                      height: "auto", // Let the height adjust based on the image's aspect ratio
                    }}
                  />
                  <CardContent>
                    {/* Display product title */}
                    <Typography variant="h6" component="div">
                      {product.titleFa} {/* Title in Persian */}
                    </Typography>
                  </CardContent>

                  {/* Button to remove from favorites */}
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onClick={() => removeFromFavorites(product.id)}
                  >
                    حذف از علاقه‌مندی‌ها {/* Remove from favorites */}
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default FavoritesPage;
