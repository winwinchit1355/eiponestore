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
                      <a className="ec-header-btn ec-sidebar-toggle">
                        <i className="fi fi-rr-apps" />
                      </a>
                      <ul>
                        <li>
                          <Nav.Link as={Link} to="/">
                            Home
                          </Nav.Link>
                        </li>

                        <li className="dropdown">
                          <Nav.Link>Categories</Nav.Link>
                          <ul className="sub-menu">
                            {categories?.map((category, index) => (
                              <li key={index}>
                                <Link
                                  to={`/shop?category=${category.slug}`}
                                  className=""
                                  // onClick={handleNavDropdownClick}
                                >
                                  {category.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="dropdown">
                          <Nav.Link as={Link} to="/service">
                            Service
                          </Nav.Link>
                        </li>

                        <li className="dropdown">
                          <Nav.Link as={Link} to="/contact-us">
                            Contact Us
                          </Nav.Link>
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
