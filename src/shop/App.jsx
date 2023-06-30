import { Routes, Route } from "react-router-dom";
import ShopLayout from "./components/layout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ContactUs from "./components/ContactUs/ContactUs";
import NotFound from "../errors/NotFound";
import './components/styles/style.css';

function ShopApp() {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default ShopApp;
