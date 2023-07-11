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
import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";

function ShopNavbar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors },setValue,watch } = useForm();
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
    try{
      navigate(`/shop?productName=${data.productName}`);
    }catch (error){
      console.log(error);
    }
  }
  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-tertiary">
        <Container fluid className="nav-container">
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
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <NavDropdown
                  title="Shop"
                  id={`offcanvasNavbarDropdown-expand-md`}
                  // show={showNavDropdown}
                  // onSelect={handleNavDropdownSelect}
                  // onMouseEnter={() => setShowNavDropdown(true)}
                  // onMouseLeave={() => setShowNavDropdown(false)}
                >
                  {categories?.map((category, index) => (
                    <Link
                      key={index}
                      to={`/shop?category=${category.slug}`}
                      className="dropdown-item"
                      // onClick={handleNavDropdownClick}
                    >
                      {category.name}
                    </Link>
                  ))}
                </NavDropdown>
                <Nav.Link as={Link} to="/service">
                  Service
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us">
                  Contact Us
                </Nav.Link>
              </Nav>
              {/* <Nav className="justify-content-center flex-grow-2 pe-3"> */}
              <Form className="d-flex" >
                <input
                  type="text"
                  placeholder="Search"
                  className="product-search form-control"
                  aria-label="Search"
                  name="productName"
                  {...register("productName")}
                />
                <Button className="btn btn-dark btn-ecommerce" onClick={handleSubmit(onSubmit)}>
                  Search
                </Button>
              </Form>
              {/* </Nav> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default ShopNavbar;
