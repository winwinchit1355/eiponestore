import { useSelector, useDispatch } from "react-redux";
import AdsCards from "./AdsCards";
import HomeBanner from "./Banner";
import FeatureProducts from "./FeatureProducts";
import { useEffect } from "react";
import { fetchProducts, fetchFeatureProducts } from "../../store/actions";
import NewArriavalProducts from "./NewArriavalProducts";

function Home() {
  const params = "?perPage=8";
  const featureParams = "?perPage=8&is_feature=active";
  const { products } = useSelector((state) => state.products);
  const { featureProducts } = useSelector((state) => state.featureProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(params));
    dispatch(fetchFeatureProducts(featureParams));
  }, []);
  return (
    <div>
      <HomeBanner />
      <AdsCards />
      <FeatureProducts products={featureProducts?.data} />
      <NewArriavalProducts products={products?.data} />
    </div>
  );
}

export default Home;
