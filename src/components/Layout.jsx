import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
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

export default Layout;
