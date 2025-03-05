"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box, keyframes } from "@mui/system";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  storage: string;
  ram: string;
}

const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const MobileCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  storage,
  ram,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 320, // افزایش سایز کارت
        borderRadius: 2,
        ml: 10,
        transition: "transform 0.3s ease",
        "&:hover": {
          animation: `${bounceAnimation} 0.6s ease`,
        },
      }}
    >
      <CardMedia
        component="img"
        height="270"
        image={image}
        alt={title}
        sx={{
          objectFit: "contain",
          objectPosition: "top",
        }}
      />
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
          ml={16}
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
