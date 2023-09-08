import "@fortawesome/fontawesome-free/css/all.css";

function Footer({ categories }) {
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
                  {categories?.data.map((category, index) => (
                    <li key={index} className="mb-1">
                      <a href="#">
                        <i className="fa-solid fa-chevron-right"></i>{" "}
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-section3 ">
                <h5 className="mb-4 text-uppercase fw-bold">About The Store</h5>
                <div className="tags-box d-flex flex-wrap gap-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto voluptatum iusto reiciendis voluptates est quae
                    neque vero aliquam porro consectetur deleniti nam dolores,
                    sunt assumenda officia illo cumque quia pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-section4 ">
                <h5 className="mb-4 text-uppercase fw-bold">Keep In Touch</h5>
                <div className="subscribe">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Enter Your Email"
                  />
                  <div className="mt-3 d-grid">
                    <a
                      href="#"
                      className="btn btn-dark rounded-0 btn-ecomm"
                    >
                      Subscribe
                    </a>
                  </div>
                  <p className="mt-3 mb-0">
                    Subscribe to receive early discount offers, updates and new
                    products info.
                  </p>
                </div>
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
