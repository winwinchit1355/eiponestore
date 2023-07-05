import { Outlet } from "react-router-dom";
import ShopNavbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

function ShopLayout() {
  return (
    <div id="page">
      <TopNavbar />
      <ShopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default ShopLayout;
