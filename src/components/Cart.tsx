import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Button from "@/components/Button"; // استفاده از دکمه‌ای که بر اساس تم است
import Image from "next/image";

const Cart = () => {
  return (
    <Box>
      <Typography variant="h6">سبد خرید</Typography>

      {/* نمایش آیتم‌های سبد */}
      <Box
        sx={{
          display: "flex",
          margin: "1rem 0",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Image
            src="/assets/home/headphoneZ.jpg"
            width={50}
            height={50}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginRight: "1rem",
            }}
          >
            <Typography variant="body1" sx={{ marginLeft: "0.3rem" }}>
              Headphone Z
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: " #6f7275", marginLeft: "0.3rem" }}
            >
              $50
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
            1
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>جمع کل</Typography>
        <Typography>100$</Typography>
      </Box>

      {/* دکمه پرداخت */}
      <Button
        color="primary" // استفاده از primary برای تم آبی روشن
        variant="contained"
        sx={{
          width: "100%",
          marginTop: "1rem",
          fontWeight: 700,
          fontSize: "1rem",
        }}
      >
        <Link
          href="/checkout"
          style={{ color: "white", textDecoration: "none" }}
        >
          پرداخت
        </Link>
      </Button>
    </Box>
  );
};

export default Cart;
