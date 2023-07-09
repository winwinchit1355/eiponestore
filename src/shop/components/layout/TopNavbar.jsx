import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function TopNavbar() {
  return (
    <>
        <Navbar key='md'  className="bg-body-tertiary ">
          <Container fluid className="bg-dark">
            <Navbar.Brand
              className="text-white"
              href="/"
              style={{ paddingLeft: "30px" }}
            >
              Su Su Store
            </Navbar.Brand>
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-md'
              aria-labelledby='offcanvasNavbarLabel-expand-md'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end gap-3 p-2 flex-grow-1 pe-3 text-white">
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
