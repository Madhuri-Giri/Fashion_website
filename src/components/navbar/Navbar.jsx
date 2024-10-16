
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/Navbar.css";
import logo from "../../assets/logo.png";

const CustomNavbar = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        className="bg_mainNav"
        bg=""
        variant="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#why-choose-us">
            <img src={logo} className="img-fluid" alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navmainmenus custom-nav">
              <Nav.Link href="/">Why Choose Us</Nav.Link>
              <Nav.Link href="#our-work">Our Works</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="tel:1-800-123-1234" className="d-flex align-items-center">
                <FontAwesomeIcon icon={faMobileAlt} className="me-2" /> 
                1-800-123-1234
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
