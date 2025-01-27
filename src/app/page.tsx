// app/page.tsx

import Header from "@/components/home/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <h1>به وب سایت من خوش آمدید</h1>
        <p>اینجا محتوای صفحه خانه را میبینِید</p>
      </main>
    </div>
  );
};

export default Home;
