import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";

const HowGWork = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={4} alignItems="center">
        {/* First Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: -20,
                width: "80px",
                height: "80px",
                backgroundColor: "lightblue",
                zIndex: -1,
              }}
            ></Box>
            <Image
              src="/aboutus/digitizationus.jpg"
              alt="Work Process"
              width={500}
              height={400}
              style={{ borderRadius: 8 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            گجت لاین چگونه کار می‌کند؟
          </Typography>
          <Box
            sx={{ width: 95, height: 4, backgroundColor: "blue", mb: 2 }}
          ></Box>
          <Typography variant="body1" color="text.secondary">
            فروشنده، در گجت لاین آسان غرفه می‌سازد، محصولاتش را به‌راحتی عرضه
            می‌کند و درباره محصولاتش با خریداران گفت‌وگو می‌کند. خریداران در گجت
            لاین با دنیایی از کسب‌وکارهای کوچک روبه‌رو می‌شوند. تجربه‌های دیگر
            خریداران را می‌خوانند و هزینه هر آنچه را می‌خواهند از پرداخت امن
            می‌پردازند. تا هفت روز منتظر ثبت رضایت خریدار می‌ماند. اگر او راضی
            بود، هزینه‌اش را به او برمی‌گرداند و اگر راضی بود، با خیال‌ راحت
            تسویه حساب می‌کند.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        {/* Second Section */}
        <Grid item xs={14} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            گجت لاین پویاست
          </Typography>
          <Box
            sx={{ width: 95, height: 4, backgroundColor: "blue", mb: 2 }}
          ></Box>
          <Typography variant="body1" color="text.secondary">
            صاحبان کسب‌وکارهای کوچک که روزی در گجت لاین غرفه ساخته‌اند، حالا
            بزرگ‌تر می‌فروشند و خریداران زیادی دارند. افزایش تعداد غرفه‌داران،
            رشد فروش و حضور مشتاقانه‌ی خریداران نشان می‌دهد گجت لاین بیش از آنچه
            فکرش را می‌کنیم سرزنده و پویاست.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Box
              sx={{
                position: "absolute",
                top: -20,
                right: -20,
                width: "80px",
                height: "80px",
                backgroundColor: "lightblue",
                zIndex: -1,
              }}
            ></Box>
            <Image
              src="/aboutus/emailus.jpg"
              alt="Dynamic Growth"
              width={500}
              height={400}
              style={{ borderRadius: 8 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowGWork;
