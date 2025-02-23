import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems = [] }: CartProps) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box>
      <Typography variant="h6">سبد خرید</Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body2">سبد خرید شما خالی است</Typography>
      ) : (
        cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              margin: "1rem 0",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Image src={item.image} width={50} height={50} alt={item.name} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ marginLeft: "0.3rem" }}>
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#6f7275", marginLeft: "0.3rem" }}
                >
                  ${item.price}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "0.75rem" }}>تعداد</Typography>
              <Typography variant="body1" sx={{ fontWeight: 800 }}>
                {item.quantity}
              </Typography>
            </Box>
          </Box>
        ))
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>جمع کل</Typography>
        <Typography>${total}</Typography>
      </Box>

      <Button
        color="primary"
        variant="contained"
        sx={{
          width: "100%",
          marginTop: "1rem",
          fontWeight: 700,
          fontSize: "1rem",
        }}
      >
        <Link
          href="/shop/cart"
          style={{ color: "white", textDecoration: "none" }}
        >
          پرداخت
        </Link>
      </Button>
    </Box>
  );
};

export default Cart;
