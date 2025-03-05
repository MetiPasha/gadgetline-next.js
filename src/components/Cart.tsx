import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import { IShopProducts } from "@/api/server-api/types"; // وارد کردن تایپ IShopProducts

interface CartProps {
  cartItems: (IShopProducts & { quantity: number })[]; // استفاده از ترکیب IShopProducts و quantity
}

const Cart = ({ cartItems = [] }: CartProps) => {
  // محاسبه جمع کل سبد خرید
  const total = cartItems.reduce(
    (acc, item) => acc + (item.bestSeller?.lastPrice || 0) * item.quantity, // از lastPrice برای محاسبه استفاده می‌شود
    0
  );

  // قالب‌بندی جمع کل
  const formattedTotal = new Intl.NumberFormat("fa-IR").format(total);

  return (
    <Box>
      <Typography variant="h6" sx={{ marginBottom: "1rem", fontWeight: 700 }}>
        سبد خرید
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body2" color="textSecondary">
          سبد خرید شما خالی است
        </Typography>
      ) : (
        cartItems.map((item) => (
          <Box
            key={item.id} // استفاده از id به عنوان کلید
            sx={{
              display: "flex",
              margin: "1rem 0",
              justifyContent: "space-between",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Image
                src={item.images.main}
                width={50}
                height={50}
                alt={item.titleFa}
                style={{ borderRadius: "4px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item.titleFa}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#6f7275", marginTop: "0.5rem" }}
                >
                  {new Intl.NumberFormat("fa-IR").format(
                    item.bestSeller?.lastPrice ?? 0
                  )}{" "}
                  تومان
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
              <Typography sx={{ fontSize: "0.75rem", color: "#6f7275" }}>
                تعداد
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 800 }}>
                {item.quantity}
              </Typography>
            </Box>
          </Box>
        ))
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>جمع کل</Typography>
        <Typography sx={{ fontWeight: 700 }}>{formattedTotal} تومان</Typography>
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
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          پرداخت
        </Link>
      </Button>
    </Box>
  );
};

export default Cart;
