// app/page.tsx

import Header from "@/components/home/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/home/Dashboard";
import Product from "@/components/Product";
import Footer from "@/components/shared/Footer";
import { Box } from "@mui/material";
import MobileList from "@/components/home/MobileList";
import LaptopCard from "@/components/home/LaptopList";
import ReadingSection from "@/components/home/ReadingSection";

// import ProductDetail from "@/components/ProductDetail";

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Dashboard />
      <Product />
      <MobileList />
      <LaptopCard />
      <ReadingSection />
      <Footer />
      {/* <ProductDetail /> */}
    </Box>
  );
};

export default Home;
