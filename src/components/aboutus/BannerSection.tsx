import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

const BannerSection = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", mt: 1 }}>
      {/* Banner Image */}
      <Box sx={{ width: "100%", height: 400, position: "relative" }}>
        <Image
          src="/aboutus/earthus.jpg" // مسیر تصویر را تغییر بده
          alt="Team Banner"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      {/* Text Section */}
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          از گجت لاین
        </Typography>
        <Typography variant="body1" color="text.secondary">
          گجت لاین بستر کسب‌وکارهای کوچک است. اینجا سازندگان اصلی محصولات غیر
          کارخانه‌ای از شهرها و روستاهای مختلف می‌فروشند، بیشتر دیده می‌شوند و
          مشتریان وفادار خود را می‌یابند. در گجت لاین خریداران تنوع چشم‌گیری از
          محصولات می‌بینند، که شاید در کنار هیچ عطاری نباشد. با فروشندگان
          گفت‌وگو می‌کنند و امتیازها، دیدگاه‌ها و تجربه‌های دیگران می‌بینند.
          هزینه‌ای که می‌پردازند، زمانی به حساب فروشندگان می‌رود که از محصول
          دریافتی راضی باشند.
        </Typography>
      </Container>
    </Box>
  );
};

export default BannerSection;
