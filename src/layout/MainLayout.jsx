import { Outlet } from "react-router";
import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
