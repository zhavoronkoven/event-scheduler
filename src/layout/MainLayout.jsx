import { Outlet } from "react-router";
import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="grow py-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
