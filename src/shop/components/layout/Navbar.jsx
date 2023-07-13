import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../store/actions";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function ShopNavbar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const productName = searchParams.get("productName");
  useEffect(() => {
    setUrl(location.pathname);
    dispatch(fetchCategories());
    setValue("productName", productName || "");
  }, [productName]);

  const handleNavDropdownSelect = () => {
    setShowNavDropdown(false);
  };

  const handleNavDropdownClick = () => {
    setShowNavDropdown(false);
  };

  const onSubmit = (data) => {
    try {
      navigate(`/shop?productName=${data.productName}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar
        key="md"
        expand="md"
        className="bg-body-tertiary"
        style={{ borderBottom: "1px solid #e8e9ea" }}
      >
        <Container fluid className="">
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 ps-5 ms-5">
                <div className="row">
                  <div className="col-md-12 align-self-center">
                    <div className="ec-main-menu">
                      <a
                        href="javascript:void(0)"
                        className="ec-header-btn ec-sidebar-toggle"
                      >
                        <i className="fi fi-rr-apps" />
                      </a>
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li className="dropdown position-static">
                          <a href="javascript:void(0)">Categories</a>
                          <ul className="mega-menu d-block">
                            <li className="d-flex">
                              <ul className="d-block">
                                <li className="menu_title">
                                  <a href="javascript:void(0)">
                                    Classic Variation
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar-col-3.html">
                                    Left sidebar 3 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar-col-4.html">
                                    Left sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-right-sidebar-col-3.html">
                                    Right sidebar 3 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-right-sidebar-col-4.html">
                                    Right sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-full-width.html">
                                    Full width 4 column
                                  </a>
                                </li>
                              </ul>
                              <ul className="d-block">
                                <li className="menu_title">
                                  <a href="javascript:void(0)">
                                    Classic Variation
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-left-sidebar-col-3.html">
                                    Banner left sidebar 3 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-left-sidebar-col-4.html">
                                    Banner left sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-right-sidebar-col-3.html">
                                    Banner right sidebar 3 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-right-sidebar-col-4.html">
                                    Banner right sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-full-width.html">
                                    Banner Full width 4 column
                                  </a>
                                </li>
                              </ul>
                              <ul className="d-block">
                                <li className="menu_title">
                                  <a href="javascript:void(0)">
                                    Columns Variation
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-full-width-col-3.html">
                                    3 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-full-width-col-4.html">
                                    4 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-full-width-col-5.html">
                                    5 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-full-width-col-6.html">
                                    6 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-full-width-col-3.html">
                                    Banner 3 Columns
                                  </a>
                                </li>
                              </ul>
                              <ul className="d-block">
                                <li className="menu_title">
                                  <a href="javascript:void(0)">
                                    List Variation
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-left-sidebar.html">
                                    Shop left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-right-sidebar.html">
                                    Shop right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-banner-left-sidebar.html">
                                    Banner left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-banner-right-sidebar.html">
                                    Banner right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-full-col-2.html">
                                    Full width 2 columns
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul className="ec-main-banner w-100">
                                <li>
                                  <a
                                    className="p-0"
                                    href="shop-left-sidebar-col-3.html"
                                  >
                                    <img
                                      className="img-responsive"
                                      src="assets/images/menu-banner/1.jpg"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="p-0"
                                    href="shop-left-sidebar-col-4.html"
                                  >
                                    <img
                                      className="img-responsive"
                                      src="assets/images/menu-banner/2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="p-0"
                                    href="shop-right-sidebar-col-3.html"
                                  >
                                    <img
                                      className="img-responsive"
                                      src="assets/images/menu-banner/3.jpg"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="p-0"
                                    href="shop-right-sidebar-col-4.html"
                                  >
                                    <img
                                      className="img-responsive"
                                      src="assets/images/menu-banner/4.jpg"
                                      alt=""
                                    />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="javascript:void(0)">Products</a>
                          <ul className="sub-menu">
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Product page
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="product-left-sidebar.html">
                                    Product left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-right-sidebar.html">
                                    Product right sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Product 360
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="product-360-left-sidebar.html">
                                    360 left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-360-right-sidebar.html">
                                    360 right sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Product video
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="product-video-left-sidebar.html">
                                    Video left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-video-right-sidebar.html">
                                    Video right sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Product gallery
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="product-gallery-left-sidebar.html">
                                    Gallery left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-gallery-right-sidebar.html">
                                    Gallery right sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="product-full-width.html">
                                Product full width
                              </a>
                            </li>
                            <li>
                              <a href="product-360-full-width.html">
                                360 full width
                              </a>
                            </li>
                            <li>
                              <a href="product-video-full-width.html">
                                Video full width
                              </a>
                            </li>
                            <li>
                              <a href="product-gallery-full-width.html">
                                Gallery full width
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="javascript:void(0)">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="contact-us.html">Contact Us</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="register.html">Register</a>
                            </li>
                            <li>
                              <a href="track-order.html">Track Order</a>
                            </li>
                            <li>
                              <a href="terms-condition.html">Terms Condition</a>
                            </li>
                            <li>
                              <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <span
                            className="main-label-note-new"
                            data-toggle="tooltip"
                            title="NEW"
                          />
                          <a href="javascript:void(0)">Others</a>
                          <ul className="sub-menu">
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Mail Confirmation
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="email-template-confirm-1.html">
                                    Mail Confirmation 1
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-confirm-2.html">
                                    Mail Confirmation 2
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-confirm-3.html">
                                    Mail Confirmation 3
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-confirm-4.html">
                                    Mail Confirmation 4
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-confirm-5.html">
                                    Mail Confirmation 5
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Mail Reset password
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="email-template-forgot-password-1.html">
                                    Reset password 1
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-forgot-password-2.html">
                                    Reset password 2
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-forgot-password-3.html">
                                    Reset password 3
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-forgot-password-4.html">
                                    Reset password 4
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-forgot-password-5.html">
                                    Reset password 5
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Mail Promotional
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="email-template-offers-1.html">
                                    Offer mail 1
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-offers-2.html">
                                    Offer mail 2
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-offers-3.html">
                                    Offer mail 3
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-offers-4.html">
                                    Offer mail 4
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-offers-5.html">
                                    Offer mail 5
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-offers-6.html">
                                    Offer mail 6
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-offers-7.html">
                                    Offer mail 7
                                  </a>
                                </li>
                                <li>
                                  <a href="email-template-offers-8.html">
                                    Offer mail 8
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <span className="label-note-hot" />
                              <a href="javascript:void(0)">
                                Vendor account pages
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="vendor-dashboard.html">
                                    Vendor Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a href="vendor-profile.html">
                                    Vendor Profile
                                  </a>
                                </li>
                                <li>
                                  <a href="vendor-uploads.html">
                                    Vendor Uploads
                                  </a>
                                </li>
                                <li>
                                  <a href="vendor-settings.html">
                                    Vendor Settings
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <span className="label-note-trending" />
                              <a href="javascript:void(0)">
                                User account pages
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="user-profile.html">User Profile</a>
                                </li>
                                <li>
                                  <a href="user-history.html">History</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="track-order.html">Track Order</a>
                                </li>
                                <li>
                                  <a href="user-invoice.html">Invoice</a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <a href="javascript:void(0)">
                                Construction pages
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="404-error-page.html">
                                    404 error page
                                  </a>
                                </li>
                                <li>
                                  <a href="under-maintenance.html">
                                    maintanence page
                                  </a>
                                </li>
                                <li>
                                  <a href="coming-soon.html">
                                    Coming soon page
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <span className="label-note-new" />
                              <a href="javascript:void(0)">
                                Vendor Catalog pages
                                <i className="ecicon eci-angle-right" />
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="catalog-single-vendor.html">
                                    Catalog Single Vendor
                                  </a>
                                </li>
                                <li>
                                  <a href="catalog-multi-vendor.html">
                                    Catalog Multi Vendor
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="javascript:void(0)">Blog</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-left-sidebar.html">
                                Blog left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail-left-sidebar.html">
                                Blog detail left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail-right-sidebar.html">
                                Blog detail right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-full-width.html">Blog full width</a>
                            </li>
                            <li>
                              <a href="blog-detail-full-width.html">
                                Blog detail full width
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="javascript:void(0)">Elements</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="elemets-products.html">Products</a>
                            </li>
                            <li>
                              <a href="elemets-typography.html">Typography</a>
                            </li>
                            <li>
                              <a href="elemets-title.html">Titles</a>
                            </li>
                            <li>
                              <a href="elemets-categories.html">Categories</a>
                            </li>
                            <li>
                              <a href="elemets-buttons.html">Buttons</a>
                            </li>
                            <li>
                              <a href="elemets-tabs.html">Tabs</a>
                            </li>
                            <li>
                              <a href="elemets-accordions.html">Accordions</a>
                            </li>
                            <li>
                              <a href="elemets-blog.html">Blogs</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="offer.html">Hot Offers</a>
                        </li>
                        <li className="dropdown scroll-to">
                          <a href="javascript:void(0)">
                            <i className="fi fi-rr-sort-amount-down-alt" />
                          </a>
                          <ul className="sub-menu">
                            <li className="menu_title">Scroll To Section</li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="collection"
                                className="nav-scroll"
                              >
                                Top Collection
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="categories"
                                className="nav-scroll"
                              >
                                Categories
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="offers"
                                className="nav-scroll"
                              >
                                Offers
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="vendors"
                                className="nav-scroll"
                              >
                                Top Vendors
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="services"
                                className="nav-scroll"
                              >
                                Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="arrivals"
                                className="nav-scroll"
                              >
                                New Arrivals
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="reviews"
                                className="nav-scroll"
                              >
                                Client Review
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                data-scroll="insta"
                                className="nav-scroll"
                              >
                                Instagram Feed
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default ShopNavbar;
