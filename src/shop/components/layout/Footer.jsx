import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <footer>
      <section className="py-5 border-top bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
            <div className="col">
              <div className="footer-section1">
                <h5 className="mb-4 text-uppercase fw-bold">Contact Info</h5>
                <div className="address mb-3">
                  <h6 className="mb-0 text-uppercase fw-bold">Address</h6>
                  <p className="mb-0">123 Street Name, City, Australia</p>
                </div>
                <div className="phone mb-3">
                  <h6 className="mb-0 text-uppercase fw-bold">Phone</h6>
                  <p className="mb-0">Toll Free (123) 472-796</p>
                  <p className="mb-0">Mobile : +91-9910XXXX</p>
                </div>
                <div className="email mb-3">
                  <h6 className="mb-0 text-uppercase fw-bold">Email</h6>
                  <p className="mb-0">mail@example.com</p>
                </div>
                <div className="working-days mb-3">
                  <h6 className="mb-0 text-uppercase fw-bold">WORKING DAYS</h6>
                  <p className="mb-0">Mon - FRI / 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-section2">
                <h5 className="mb-4 text-uppercase fw-bold">Categories</h5>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Jeans
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> T-Shirts
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Sports
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Shirts &amp;
                      Tops
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Clogs &amp;
                      Mules
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Sunglasses
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Bags &amp;
                      Wallets
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Sneakers
                      &amp; Athletic
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Electronis
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="fa-solid fa-chevron-right"></i> Furniture
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-section3 ">
                <h5 className="mb-4 text-uppercase fw-bold">Popular Tags</h5>
                <div className="tags-box d-flex flex-wrap gap-2">
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Cloths
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Electronis
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Furniture
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Sports
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Men Wear
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Women Wear
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Laptops
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Formal Shirts
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Topwear
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Headphones
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Bottom Wear
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Bags
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Sofa
                  </a>
                  <a href="#" className="btn btn-ecomm rounded-0 btn-outline-dark">
                    Shoes
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-section4 text-center">
                <h5 className="mb-4 text-uppercase fw-bold">Social</h5>
                <a href="" style={{ fontSize: "18px" }}>
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </section>
      <section className="footer-strip text-center py-3 border-top positon-absolute bottom-0">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 justify-content-between">
            <p className="mb-0">Copyright © 2022. All right reserved.</p>
            <div className="payment-icon">
              <div className="row row-cols-auto g-2 justify-content-end"></div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
