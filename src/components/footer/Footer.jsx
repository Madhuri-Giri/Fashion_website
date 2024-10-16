import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { Row, Col, Container } from "react-bootstrap";
import "../footer/FooterSection.css";
import logo from "../../assets/logo-dark.png";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  

  return (
    <footer className="footer-con">
      <Container>
        <Row className="footer-row">
          <Col lg={3} md={4} sm={12} className="footer-connect" data-aos="fade-left">
            <p>info@demolink.org</p>
            <p> +91 8447906804</p>
            <Link to="/">
              <img
                className="brand-logo"
                src={logo}
                alt="Brand Logo"
                width="173"
                height="40"
              />
            </Link>
          </Col>

          <Col lg={3} md={4} sm={12} className="footer-links">
            <h5>Newsletter</h5>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="d-flex align-items-center">
              <input
                className="form-control me-2"
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                required
              />
              <button type="submit" className="btn_sub">
                Subscribe
              </button>
            </div>

            <div className="footer-icons">
              <Link to="/" className="footer-icon">
                <FaFacebookF />
              </Link>
              <Link to="/" className="footer-icon">
                <FaInstagram />
              </Link>
              <Link to="/" className="footer-icon">
                <AiFillYoutube />
              </Link>
            </div>
          </Col>

          <Col lg={3} md={4} sm={12} className="footer_about" data-aos="fade-right">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ad nisi repudiandae nobis minima.
            </p>
            <p>© 2024 Oversize. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
