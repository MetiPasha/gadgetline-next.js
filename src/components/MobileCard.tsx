import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  storage: string;
  ram: string;
}

const MobileCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  storage,
  ram,
}) => {
  return (
    <Card sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 2, ml: 10 }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {storage} | {ram}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          fontWeight="bold"
          mt={1}
          ml={14}
        >
          {price} تومان
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            خرید
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MobileCard;
