import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ShopNavbar() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/shop">Home</Nav.Link>
                  <NavDropdown
                    title="Shop"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Earring</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Bracelet
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Ring</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Necklace
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default ShopNavbar;
