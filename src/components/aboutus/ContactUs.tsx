import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Phone, Email, LocationOn, ContentCopy } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        تماس با ما
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        از این راه‌ها در ارتباط باشید
      </Typography>
      <Grid container spacing={3} alignItems="center" sx={{ mt: 3 }}>
        {/* متن‌ها (راست) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              <Phone sx={{ verticalAlign: "middle", mr: 1 }} /> تماس
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ۰۲۵-۳۲۱۰۷۵ | روزهای کاری ساعت ۹ الی ۱۷
            </Typography>
          </Box>

          <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2, mt: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              <Email sx={{ verticalAlign: "middle", mr: 1 }} /> ایمیل
            </Typography>
            <Typography variant="body1" color="text.secondary">
              info@basalam.com
            </Typography>
            <Button
              variant="outlined"
              color="error"
              size="small"
              sx={{ mt: 1 }}
            >
              <ContentCopy sx={{ mr: 1 }} /> کپی
            </Button>
          </Box>

          <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2, mt: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              <LocationOn sx={{ verticalAlign: "middle", mr: 1 }} /> آدرس
            </Typography>
            <Typography variant="body1" color="text.secondary">
              تهران، پردیسان، بلوار امام صادق، بلوار مولوی، پارک علم و فناوری
              استان تهران، ساختمان شهید فخری‌زاده، طبقه اول، شرکت توسعه و تدبیر
              جوامع (گجت لاین)
            </Typography>
            <Button
              variant="outlined"
              color="error"
              size="small"
              sx={{ mt: 1 }}
            >
              <ContentCopy sx={{ mr: 1 }} /> کپی
            </Button>
          </Box>
        </Grid>

        {/* عکس (چپ) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="/contactus/support-icon.png"
              alt="Support"
              sx={{ width: "60%", maxWidth: 250 }} // عرض ریسپانسیو
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
