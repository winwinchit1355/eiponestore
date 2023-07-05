import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div className="slider-img-card">
        <img
          className="slider-img"
          src="public/assets/images/bg2.png"
          alt="Slide 1"
          style={{ height: "200px" }}
        />
      </div>
      <div className="slider-img-card">
        <img
          className="slider-img"
          src="public/assets/images/bg1.png"
          alt="Slide 2"
          style={{ height: "200px" }}
        />
      </div>
      <div className="slider-img-card">
        <img
          className="slider-img"
          src="public/assets/images/bg2.png"
          alt="Slide 3"
          style={{ height: "200px" }}
        />
      </div>
      <div className="slider-img-card">
        <img
          className="slider-img"
          src="public/assets/images/bg1.png"
          alt="Slide 3"
          style={{ height: "200px" }}
        />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}

export default ImageCarousel;
