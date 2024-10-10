import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { Row, Col, Container } from "react-bootstrap";
import "../footer/FooterSection.css";
import logo from '../../assets/logo-dark.png'
function Footer() {
  return (
    <>
      <section className="footer-con">
        <Container>
          <Row className="footer-row">
            <Col lg={3} md={4} className="footer-connect">
              <div>
                <p>info@demolink.org</p>
              </div>
              <div>
                <p> +91 8447906804</p>
              </div>
              <div className='brand'>
          <Link to="/">
            <img className='brand-logo' src={logo} alt='Brand Logo' width='173' height='40' />
          </Link>
        </div>
            </Col>

            <Col lg={3} md={4} className="footer-links">
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
                <Link to="/" className="footer-icons">
                  <FaFacebookF />
                </Link>
                <Link to="/" className="footer-icons">
                  <FaInstagram />
                </Link>
                <Link to="/" className="footer-icons">
                  <AiFillYoutube />
                </Link>
              </div>
            </Col>

            <Col lg={3} md={4} className="footer_about">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                ad nisi repudiandae nobis minima.
              </p>
              <p>© 2024 Oversize. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
