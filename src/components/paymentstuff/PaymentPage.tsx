import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Radio,
  FormControlLabel,
} from "@mui/material";
import Link from "next/link";

const PaymentPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      {/* Header */}
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          color: "primary.main",
          fontWeight: 700,
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
        }}
      >
        گجت لاین
      </Typography>

      <Grid container spacing={3}>
        {/* Payment Method */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                انتخاب روش پرداخت
              </Typography>
              <FormControlLabel
                control={<Radio checked />}
                label="پرداخت اینترنتی"
                sx={{ fontWeight: 500 }}
              />
              <Typography variant="body2" color="text.secondary">
                پرداخت آنلاین با تمامی کارت‌های بانکی
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                خلاصه سفارش
              </Typography>
              <Typography variant="body1">
                جمعه ۳ اسفند - بازه ۱۸ - ۲۱
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ارسال عادی
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Payment Details */}
      <Card sx={{ mt: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="body1">قیمت کالاها: ۴,۰۰۰,۰۰۰ تومان</Typography>
          <Typography variant="body1">
            قیمت اشتراک پلاس: ۴۹۱,۱۰۰ تومان
          </Typography>
          <Typography variant="body1" color="success.main">
            ارسال: رایگان
          </Typography>
          <Typography variant="body1" color="error.main">
            تخفیف کالاها: ۲۵۱,۰۰۰ تومان
          </Typography>
          <Typography variant="body1" color="success.main">
            سود شما از خرید: ۲۵۱,۰۰۰ تومان (۱۱٪)
          </Typography>
          <Typography variant="h5" fontWeight={600} mt={2}>
            مبلغ قابل پرداخت: ۲,۵۶۸,۱۰۰ تومان
          </Typography>

          <Link href="/payment/success" passHref>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, fontSize: "1.2rem", py: 1 }}
            >
              تکمیل پرداخت
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PaymentPage;
