import { Outlet } from "react-router";
import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="py-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
