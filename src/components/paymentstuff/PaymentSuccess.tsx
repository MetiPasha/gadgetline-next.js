"use client";

import { CheckCircleOutline } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const PaymentSuccess = () => {
  const router = useRouter();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <CheckCircleOutline sx={{ fontSize: 80, color: "green", mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        پرداخت موفقیت‌آمیز بود!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        از خرید شما متشکریم. سفارش شما با موفقیت ثبت شد.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/")}
      >
        بازگشت به صفحه اصلی
      </Button>
    </Container>
  );
};

export default PaymentSuccess;
