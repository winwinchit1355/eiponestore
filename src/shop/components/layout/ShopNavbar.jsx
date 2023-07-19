import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../store/actions";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dropdown } from "react-bootstrap";
import { Tokens } from "../../consts";
import { ToastContainer } from "react-toastify";

function ShopNavbar({categories}) {
  // const [token, setToken] = useState(localStorage.getItem(Tokens.CUSTOMER));
  const location = useLocation();
  // const [url, setUrl] = useState(null);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  
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
    // setUrl(location.pathname);
    dispatch(fetchCategories());
    setValue("productName", productName || "");
  }, [productName]);

  const handleOffcanvasToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen); // Toggle the state when the offcanvas is opened/closed
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
        <Container fluid className="nav-container">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            onClick={handleOffcanvasToggle}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            show={isOffcanvasOpen}
          >
            <Offcanvas.Header closeButton onClick={handleOffcanvasToggle}>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Menu
              </Offcanvas.Title>
              
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 ps-5 ms-5">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                
                <Dropdown id={`offcanvasNavbarDropdown-expand-md`}>
                  <Dropdown.Header className="nav-link">
                    Shop
                    <i
                      className="fa-solid fa-caret-left fa-rotate-270"
                      style={{ fontSize: "13px", marginLeft: "5px" }}
                    ></i>
                  </Dropdown.Header>
                  <ul className="dropdown-menu dropdown-menu-center">
                    {categories ? (
                      categories.data.map((category, index) => (
                        <li key={index}>
                          <Link
                            className="dropdown-item"
                            as={Link}
                            to={`/shop?category=${category.slug}`}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li >
                          <Link
                            className="dropdown-item"
                            
                          >
                            Loading...
                          </Link>
                        </li>
                    )}
                  </ul>
                </Dropdown>
                <Nav.Link as={Link} to="/service">
                  Service
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us">
                  Contact Us
                </Nav.Link>
              </Nav>
              {/* <Nav className="justify-content-center flex-grow-2 pe-3"> */}
              <form
                className="d-flex "
                id={isOffcanvasOpen ? `header-search-form` : ``}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="product-search form-control"
                  aria-label="Search"
                  name="productName"
                  {...register("productName")}
                />
                <Button
                  className="btn btn-dark btn-ecommerce"
                  onClick={handleSubmit(onSubmit)}
                >
                  Search
                </Button>
              </form>
              {/* </Nav> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
}

export default ShopNavbar;
