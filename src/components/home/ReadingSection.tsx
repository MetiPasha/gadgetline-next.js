"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface ArticleProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const articles: ArticleProps[] = [
  {
    image: "/assets/home/reading/detective.jpg",
    title: "معرفی سریال True Detective",
    description: "یک سریال عالی از فوکوناگا",
    link: "https://www.tarafdari.com/node/2414980",
  },
  {
    image: "/assets/home/reading/geforce.jpg",
    title: "عملکرد Nvidia Geforce 5080",
    description: "جزئیات کامل از Geforce 5080",
    link: "https://www.cgchannel.com/2025/02/see-cg-benchmarks-for-nvidias-geforce-rtx-5090-and-5080-gpus/",
  },
  {
    image: "/assets/home/reading/star.jpg",
    title: "داستان آل پاچینو",
    description: "چگونه همه چیز شروع شد؟",
    link: "https://www.zoomg.ir/biography/313133-al-pacino-biography/",
  },
  {
    image: "/assets/home/reading/spirit.jpg",
    title: "بهترین انیمیشن تاریخ",
    description: "با بررسی دقیق",
    link: "https://www.zoomg.ir/movie-tv-show-review/152234-spirited-away-review/",
  },
];

const ReadingSection: React.FC = () => {
  return (
    <Container sx={{ mt: 10, mb: 10 }}>
      <Typography variant="h5" fontWeight="bold" textAlign="left" mb={3}>
        📖 خواندنی‌های جذاب
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Link href={article.link} passHref legacyBehavior>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6 },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={article.image}
                    alt={article.title}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      {article.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReadingSection;
