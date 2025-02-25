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
  color: string;
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

const LaptopCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  color,
  storage,
  ram,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: 3,
        borderRadius: 2,
        ml: 10,
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          animation: `${bounceAnimation} 0.6s ease`,
          boxShadow: "0 8px 20px rgba(0, 123, 255, 0.3)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
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
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        </Box>
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

export default LaptopCard;
