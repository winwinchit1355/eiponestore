import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function TopNavbar() {
  return (
    <>
      <Navbar key="md" className="bg-body-tertiary ">
        <Container fluid className="" style={{ background: "rgb(233 151 68)" }}>
          <Navbar.Brand
            className="text-white"
            href="/"
            style={{ paddingLeft: "30px" }}
          >
            Su Su Store
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
              <Nav className="justify-content-end gap-3 p-2 flex-grow-1 pe-3 text-white">
                <span className="position-relative mt-2">
                  <FontAwesomeIcon className="m-2" icon={faHeart} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99
                  </span>
                </span>
                <span className="position-relative mt-2">
                  <FontAwesomeIcon className="m-2" icon={faShoppingCart} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    10
                  </span>
                </span>
                <span className="position-relative mt-2">
                  <FontAwesomeIcon
                    className="m-2 "
                    icon={faArrowRightToBracket}
                  />
                </span>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
