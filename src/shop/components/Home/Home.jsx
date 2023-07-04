import HomeBanner from "./Banner";
import BestSellingProducts from "./BestSellingProducts";
import FeatureProducts from "./FeatureProducts";

function Home() {
  return (
    <div>
      <HomeBanner />
      <FeatureProducts/>
      <BestSellingProducts/>
    </div>
  );
}

export default Home;
