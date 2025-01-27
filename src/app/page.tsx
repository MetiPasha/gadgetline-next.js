// app/page.tsx

import Header from "@/components/home/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/home/Dashboard";
import Product from "@/components/Product";
import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Dashboard />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
