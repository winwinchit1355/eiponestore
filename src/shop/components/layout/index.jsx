import { Outlet } from "react-router-dom";
import ShopNavbar from "./ShopNavbar";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";

function ShopLayout() {
  const { categories } = useSelector((state) => state.categories);
  return (
    <div id="page">
      <div className="sticky-container sticky-top">
        <TopNavbar />
        <ShopNavbar categories={categories} />
      </div>
      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default ShopLayout;
