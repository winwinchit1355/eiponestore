import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import  { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'owl.carousel';

function FeatureProducts() {
    const owlRef = useRef(null);
    useEffect(() => {
        $(owlRef.current).owlCarousel({
          // Owl Carousel options
          loop: true,
          margin: 10,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 5,
            },
          },
        });
      }, []);
    return ( 
        <div>
            <h1>This is feature products box</h1>
            <div className="owl-carousel owl-theme" ref={owlRef}>
                {/* Add your carousel items here */}
                <div className="item">
                    <img src="image1.jpg" alt="Image 1" />
                </div>
                <div className="item">
                    <img src="image2.jpg" alt="Image 2" />
                </div>
                <div className="item">
                    <img src="image3.jpg" alt="Image 3" />
                </div>
            </div>
        </div>
     );
}

export default FeatureProducts;