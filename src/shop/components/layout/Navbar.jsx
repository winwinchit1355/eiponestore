import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/actions";

function ShopNavbar() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
        <Container fluid>
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
              <div className="row w-100">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown
                    title="Shop"
                    id={`offcanvasNavbarDropdown-expand-md`}
                    >
                    {categories?.map((category, index) => (
                      <NavDropdown.Item key={index} href="#action3">
                        {category.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
                </div>
                <div className="col-md-4">
                <Nav className="justify-content-center flex-grow-2 pe-3">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="btn btn-success">Search</Button>
                </Form>
              </Nav>
                </div>
              </div>
              
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default ShopNavbar;
