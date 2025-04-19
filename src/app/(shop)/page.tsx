// app/page.tsx

import Hero from "@/components/Hero";
import Dashboard from "@/components/home/Dashboard";
import Product from "@/components/Product";
import { Box } from "@mui/material";
import MobileList from "@/components/home/MobileList";
import LaptopCard from "@/components/home/LaptopList";
import ReadingSection from "@/components/home/ReadingSection";
import HomeBanners from "@/components/home/HomeBanners";
import HeroBanner from "@/components/home/HeroBanner";

// import ProductDetail from "@/components/ProductDetail";

const Home = async () => {
  return (
    <Box>
      <HeroBanner />
      <Hero />
      <Dashboard />
      <Product />
      <HomeBanners />
      <MobileList />
      <LaptopCard />
      <ReadingSection />

      {/* <ProductDetail /> */}
    </Box>
  );
};

export default Home;
