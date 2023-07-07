import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeBanner() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} className="mb-5 pb-5">
      <div>
        <img
          className="banner-image"
          src="public/assets/images/bg1.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="banner-image"
          src="public/assets/images/bg2.png"
          alt=""
        />
      </div>
    </Carousel>
  );
}

export default HomeBanner;
