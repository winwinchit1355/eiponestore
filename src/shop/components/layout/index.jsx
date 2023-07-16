import { Outlet } from "react-router-dom";
import ShopNavbar from "./ShopNavbar";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

function ShopLayout() {
  return (
    <div id="page">
      <div className="sticky-container sticky-top">
        <TopNavbar />
        <ShopNavbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default ShopLayout;
