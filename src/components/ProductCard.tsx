"use client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box, keyframes } from "@mui/system";

const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const LaptopCard: React.FC<any> = ({
  code,
  image,
  title,
  price,
  colors = [],
  review,
  status,
  storage,
  ram,
}) => {
  console.log("LaptopCard Props:", { code, image, title, price });
  const router = useRouter();

  return (
    <Card
      onClick={() => {
        console.log("Product Code:", code);
        if (code) router.push(`/product/${code}`);
      }}
      sx={{
        maxWidth: 300,
        boxShadow: 3,
        borderRadius: 2,
        ml: 10,
        transition: "box-shadow 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          animation: `${bounceAnimation} 0.6s ease`,
          boxShadow: "0 8px 20px rgba(0, 123, 255, 0.3)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image && image !== "" ? image : null}
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

        <Typography
          variant="body2"
          sx={{
            fontSize: "0.85rem",
            color: review === "موجودی بالا" ? "gray" : "red",
            marginTop: 1,
          }}
        >
          {review}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "0.85rem",
            fontFamily: "'Vazirmatn', sans-serif",
            color: "text.secondary",
            marginTop: 1,
          }}
        >
          {status}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {storage} | {ram}
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          {colors.length > 0 ? (
            colors.map((c, index) => (
              <Box
                key={index}
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: c.hexCode,
                  border: "1px solid #ccc",
                }}
              />
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              رنگ موجود نیست
            </Typography>
          )}
        </Box>

        <Typography
          variant="h6"
          color="primary"
          fontWeight="bold"
          mt={1}
          sx={{ textAlign: "right" }}
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
