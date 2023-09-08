import { Routes, Route } from "react-router-dom";
import ShopLayout from "./components/layout";
import Home from "./components/home/Home";
import Shop from "./components/shopProduct/Shop";
import ContactUs from "./components/contact-us/ContactUs";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./components/styles/auth.css";
import "./components/styles/style.css";
import "./components/styles/navbar.css";
import Service from "./components/service/Service";
import ProductDetail from "./components/product-detail/ProductDetail";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CartList from "./components/Cart/CartList";
import CheckoutList from "./components/checkout/CheckoutList";
import CheckoutComplete from "./components/checkout/CheckoutComplete";
import OrderList from "./components/order/OrderList";
import WishList from "./components/wishlist/WishList";

function ShopApp() {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-detail/:slug" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/checkout-list" element={<CheckoutList />} />
        <Route path="/checkout-complete" element={<CheckoutComplete />} />
        <Route path="/orderlist" element={<OrderList />} />
      </Route>
    </Routes>
  );
}

export default ShopApp;
