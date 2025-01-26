// app/page.tsx
import Cart from "@/components/Cart";
import Header from "@/components/home/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>به وب سایت من خوش آمدید</h1>
        <p>اینجا محتوای صفحه خانه را میبینِید</p>
      </main>
    </div>
  );
};

export default Home;
