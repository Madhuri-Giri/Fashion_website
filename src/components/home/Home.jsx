import React from "react";
import { useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import model_img from "../../assets/model_img.jpg";
import "../home/Home.css";
import shopping from "../../assets/shoping_img.jpg";
import Navbar from "../navbar/Navbar";
import model_img_2 from "../../assets/model_img_2.jpg";
import model_img_4 from "../../assets/model_img_4.png";
import model_img_6 from "../../assets/model_img_6.jpg";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faComment, faFaceFrownOpen,  faQuoteLeft,faMinus, faTags, faCrown, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <>
      <Navbar />

      <div className="home_container">
        <section>
        <Container>
          <div className="home_box">
            <Row className="home_particion">
              <Col lg={6}>
              <div
              className="home_heading"
             data-aos="fade-left"
            >
                  <h1>Personalized Selection of Women’s Clothes</h1>
                  <div className="icon-text-box">
                    <span>
                      <FontAwesomeIcon icon={faMinus} className="minus-box1" />
                    </span>
                    <h5>Over 150 models of plus size</h5>
                  </div>
                  <button className="shop_now_btn">Shop Now</button>
                </div>
              </Col>

              <Col lg={6} className="model_img_box">
                <img src={model_img} alt="model_img" />
              </Col>
            </Row>

            <Row className="shopping_box" data-aos="fade-right">
              <Col lg={6}>
                 <div className="shopping_con" >
                  <h5>5 mistakes of choosing plus size clothes</h5>
                  <p>read more</p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="img_box">
                  <img src={shopping} alt="shopping_img" />
                </div>
              </Col>
            </Row>
          </div>
          {/* ---------------------------- */}
          <div className="section_con" id="why-choose-us">
            <Row>
              <Col lg={6}>
                <div className="img_box_2">
                  <img src={model_img_2} alt="model_img" />
                </div>
              </Col>

              <Col lg={6}>
                <div className="shopping_box_ani">
                  <div className="sec_box_2">

                    <h3 data-aos="fade-right">One Size Does Not Fit All Your Needs</h3>

                    <div className="icon-text-box" data-aos="fade-right">
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="minus-box1"
                        />
                      </span>

                      <p>
                        At Oversize, we try to avoid the limits set by modern
                        society to help you look amazing and attractive all year
                        round.
                      </p>
                    </div>

                    <div>
                      <div className="icon-text-box" data-aos="fade-right">
                        <span>
                          <FontAwesomeIcon
                            icon={faComment}
                            className="icon-box"
                          />
                        </span>
                        <h5 data-aos="fade-right">You are convinced that...</h5>
                      </div>
                      <p>
                        Your body needs to fit modern standards, but we believe
                        that any body is beautiful.
                      </p>
                    </div>

                    <div>
                      <div className="icon-text-box" data-aos="fade-right">
                        <span>
                          <FontAwesomeIcon
                            icon={faFaceFrownOpen}
                            className="icon-box"
                          />
                        </span>
                        <h5 data-aos="fade-right">You are forced to...</h5>
                      </div>
                      <p>
                        Buy underwear and clothes that don’t fit your body while
                        our shop has what you need.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        </section>
        {/* ------------------------------------------------------------- */}
        <section>
        <Container>
          <Row>
            {/* <div className="our_gallery_bg"> */}
            <Col lg={8} className="our_gallery_con" id="our-work">
              <h2>Our Gallery</h2>
              <div className="icon-text-box" data-aos="fade-left">
                <span>
                  <FontAwesomeIcon icon={faMinus} className="minus-box" />
                </span>
                <h5>
                  Here you can take a look at our latest models of plus size
                  clothes for women designed by Oversize.
                </h5>
              </div>
              <div className="button-con"data-aos="fade-right">
                <button className="contact_btn">View more</button>
              </div>
            </Col>
            {/* </div> */}
            <Col lg={4}>
              <div className="image-container">
                <div className="our_model" style={{ position: "relative" }}>
                  <img
                    src="https://img.freepik.com/free-photo/attractive-stylish-smiling-woman-choosing-apparel-clothing-store_285396-4642.jpg"
                    alt="model_img"
                  />
                </div>

                <div className="our_model_3">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/25/41/88/360_F_225418881_NEspMOE8o9hSaWUKI1UJb7F7uNKlW9Wj.jpg"
                    alt="model_img"
                  />
                </div>
                <div className="our_model_4">
                  <img
                    src="https://www.shutterstock.com/image-photo/outdoor-shot-beautiful-woman-many-600nw-743887804.jpg"
                    alt="model_img"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
      
        {/* ------------------------------------------------------------ */}
        <section>
        <Container className="about_space" id="about-us">
          <Row className="about_us">
            <Col lg={5}>
              <div className="about_box">
                <div className="icon-text-box" data-aos="fade-left">
                  <span className="diamond-box">
                    <FontAwesomeIcon icon={faTags} className="icon-con" />
                  </span>
                  <h5>Affordable Prices</h5>
                </div>
                <p data-aos="fade-right">
                  All our clothes are provided at great prices with regular
                  discounts.
                </p>

                <div className="icon-text-box" data-aos="fade-left">
                  <span className="diamond-box">
                    <FontAwesomeIcon icon={faCrown} className="icon-con" />
                  </span>
                  <h5>Individual Approach</h5>
                </div>
                <p data-aos="fade-right">
                  Oversize is known for its unique approach to designing clothes
                  for its customers.
                </p>

                <div className="icon-text-box" data-aos="fade-left">
                  <span className="diamond-box">
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      className="icon-con"
                    />
                  </span>
                  <h5>A Wide Product Range</h5>
                </div>
                <p data-aos="fade-right">
                  We provide a wide variety of plus-size underwear and clothes
                  to our clients
                </p>

                <img
                  src="https://img.freepik.com/free-photo/full-length-portrait-smiling-pretty-woman-isolated-white-wall_231208-703.jpg"
                  alt="model_img"
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="choose_us">
                <h3 data-aos="fade-right">Why do Women Choose Oversize Clothes?</h3>
                <div className="icon-text-box choose_us" data-aos="fade-left">
                  <span>
                    <FontAwesomeIcon icon={faMinus} className="minus-con" />
                  </span>
                  <p>
                    We offer women a variety of benefits besides our clothes and
                    underwear. Watch this video to know more.
                  </p>
                </div>
                <img  data-aos="fade-left"
                  src="https://media.istockphoto.com/id/1439647356/photo/clothing-racks-at-retail-store.jpg?s=612x612&w=0&k=20&c=bf2_Qcd8EvAKGDbTByqKPPs9KklneFriwNPZC_SGL9w="
                  alt="shopping_img"
                />
                <div className="choose_box">
                  <img src={model_img_6} alt="Model" />
                  <div className="choose_content">
                    <h4>
                      Our main goal is to offer great clothes designed for
                      various body sizes and types.
                    </h4>
                    <div className="name-founder">
                      <h5>Samantha Johns</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
      
        {/* ---------------------------------------------------------- */}
          {/* ---------------------------------------------------------- */}
          <section>
        <Container>
          <div className="test_bg" id="testimonials">
            <div className="test_heading">
              <h3>Testimonials</h3>
            </div>
            <div className="testimonials-container">
              <div className="testimonials-container"  data-aos="fade-right">
                <div className="testmonial_con">
                  <img src={model_img_4} alt="model_img" />
                  <div className="icon-text-box">
                    <span>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="icon-quate"
                      />
                    </span>
                    <p>
                      Unlike other plus size vendors, I've noticed that you
                      really listen to your customers.
                    </p>
                  </div>
                  <div className="icon-text-box name-icon">
                    <h5>Susan Boyle</h5>
                    <span>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="icon-quate"
                      />
                    </span>
                  </div>
                </div>

                <div className="testmonial_con">
                  <img
                    src="https://st3.depositphotos.com/1000824/13938/i/450/depositphotos_139386750-stock-photo-portrait-of-beautiful-young-woman.jpg"
                    alt="model_img"
                  />
                  <div className="icon-text-box">
                    <span>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="icon-quate"
                      />
                    </span>
                    <p>
                      I like your recent range of plus size dresses. Your
                      products look great and suit me.
                    </p>
                  </div>
                  <div className="icon-text-box name-icon">
                    <h5>Ann Smith</h5>
                    <span>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="icon-quate"
                      />
                    </span>
                  </div>
                </div>

                <div className="testmonial_con">
                  <img
                    src="https://img.freepik.com/fotos-premium/retrato-mujer-belleza-natural-piel-perfecta_918839-15065.jpg"
                    alt="model_img"
                  />
                  <div className="icon-text-box">
                    <span>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="icon-quate"
                      />
                    </span>
                    <p>
                      I’m really amazed by the quality of customer service you
                      offer. Thank you for what you do!
                    </p>
                  </div>
                  <div className="icon-text-box name-icon">
                    <h5>Kate Williamse</h5>
                    <span>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="icon-quate"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="button-container" data-aos="fade-left">
                <button className="review_btn">Send your review</button>
              </div>
            </div>
          </div>
        </Container>
        </section>
      
        {/* ------------------------------------------------------------ */}
        <section>
        <Container>
          <Row className="position-relative">
            <Col className="contact_box" data-aos="fade-right">
              <h3>Hello! I am Samantha Johns</h3>
              <div className="icon-text-box">
                <span>
                  <FontAwesomeIcon icon={faMinus} className="minus-box" />
                </span>
                <h5>Founder of "Oversize"</h5>
              </div>
              <p>
                For quite a long time I’ve been suffering from being unable to
                pick the clothes I like. Everything needed to be custom-made.
                That’s how Oversize appeared. Here we make sure that every woman
                can afford the best plus-size clothes without altering them to
                their body size. We can do it all for you quicker than anyone
                else.
              </p>

              <div  data-aos="fade-right">
                <p>
                  Here we make sure that every woman can afford the best
                  plus-size clothes without altering them to their body size. We
                  can do it all for you quicker than anyone else.
                </p>
              </div>
              <button className="contact_btn" data-aos="fade-left">Contact Us</button>
            </Col>

            <Col className="model_img" data-aos="fade-right">
              <img
                src="https://static.qns.digital/img/p/2/7/0/3/4/8/4/2703484-full_product.jpg"
                alt=""
              />
            </Col>
            <Row>
              <Col lg={3} className="innerbox" data-aos="fade-up">
                <h4>
                  I know how hard it can be to find proper plus size clothes
                  that fit your personal image & lifestyle.
                </h4>
              </Col>
            </Row>
          </Row>
        </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Home;
