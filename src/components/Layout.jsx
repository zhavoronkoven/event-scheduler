import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
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

export default Layout;
