import AdsCards from "./AdsCards";
import HomeBanner from "./Banner";
import BestSellingProducts from "./BestSellingProducts";
import FeatureProducts from "./FeatureProducts";

function Home() {
  return (
    <div>
      <HomeBanner />
      <AdsCards />
      <FeatureProducts />
      <BestSellingProducts />
    </div>
  );
}

export default Home;
