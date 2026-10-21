import { Outlet } from "react-router";
import { Header, Footer } from "@/components";

const MainLayout = () => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="px-es-mobile lg:px-es-desktop container mx-auto py-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
