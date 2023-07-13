import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../store/actions";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

function TopNavbar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
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
    setValue("productName", productName || "");
  }, [productName]);

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
        className="d-lg-block bg-body-tertiary "
        style={{ borderBottom: "1px solid #eeeeee" }}
      >
        <Container fluid className="bg-white">
          <Navbar.Brand className="" href="/" style={{ paddingLeft: "30px" }}>
            <i className="fa-solid fa-phone"></i>+95 9xxxx
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end gap-3 p-2 flex-grow-1 pe-3 ">
                <div className="header-search">
                  <Form className="ec-btn-group-form">
                    <input
                      className="form-control ec-search-bar product-search"
                      placeholder="Search products..."
                      type="text"
                      aria-label="Search"
                      name="productName"
                      {...register("productName")}
                    />
                    <button className="submit" onClick={handleSubmit(onSubmit)}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </Form>
                </div>
              </Nav>
              <Nav className="justify-content-end gap-3 p-2 flex-grow-1 pe-3 ">
                <FontAwesomeIcon className="m-2" icon={faShoppingCart} />
                <FontAwesomeIcon className="m-2" icon={faSignInAlt} />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
