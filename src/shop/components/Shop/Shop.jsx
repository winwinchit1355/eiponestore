import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchShopProducts } from "../../store/actions";
import ShopProductSidebar from "./ShopProductSidebar";
import ShopProductHeader from "./ShopProductHeader";
import ProductLists from "./ProductLists";

function Shop() {
  const { slug } = useParams();
  const params = "?perPage=8&category=" + slug;
  const { shopProducts } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopProducts(params));
  }, [slug]);

  return (
    <>
      <ShopProductSidebar />
      <ShopProductHeader />
      <ProductLists products={shopProducts?.data} />
    </>
  );
}

export default Shop;
