// app/page.tsx

import Header from "@/components/home/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/home/Dashboard";
import Product from "@/components/Product";
import Footer from "@/components/shared/Footer";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Dashboard />
      <Product />
      <Footer />
    </Box>
  );
};

export default Home;
