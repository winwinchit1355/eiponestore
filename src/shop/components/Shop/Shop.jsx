import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchShopProducts } from "../../store/actions";
import ShopProductSidebar from "./ShopProductSidebar";
import ProductLists from "./ProductLists";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoadingPage from './LoadingPage';

function Shop() {
  const { shopProducts } = useSelector((state) => state.shopProducts);
  const { loading } = useSelector((state) => state.loading);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get("category");
  const productName = searchParams.get("productName");

  let params = "?perPage=8";
  if (categoryName) {
    params = params + "&category=" + categoryName;
  }
  if (productName) {
    params = params + "&name=" + productName;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShopProducts(params));
  }, [categoryName]);

  return (
    // <>

    //   <ProductLists products={shopProducts?.data} />
    // </>
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-3" id="sidebar_fixed">
          <ShopProductSidebar/>
        </div>
        <div className="col-md-9">
          {loading? <LoadingPage  />:<ProductLists products={shopProducts?.data} />}
          
        </div>
      </div>
    </div>
  );
}

export default Shop;
