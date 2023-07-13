import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function TopNavbar() {
  return (
    <>
      <Navbar
        key="md"
        className="bg-body-tertiary "
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
                  <form className="ec-btn-group-form" action="#">
                    <input
                      className="form-control ec-search-bar"
                      placeholder="Search products..."
                      type="text"
                    />
                    <button className="submit" type="submit">
                      <i className="fi-rr-search" />
                    </button>
                  </form>
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
