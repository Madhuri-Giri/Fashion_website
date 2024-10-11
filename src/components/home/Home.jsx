import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import model_img from "../../assets/model_img.jpg";
import "../home/Home.css";
import shopping from "../../assets/shoping_img.jpg";
import Navbar from "../navbar/Navbar";
import model_img_2 from "../../assets/model_img_2.jpg";
import product_img from "../../assets/product_img.jpg";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faMinus,
  faTags,
  faCrown,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

import model_img_4 from "../../assets/model_img_4.png";
import model_img_5 from "../../assets/model_img_5.jpg";
import model_img_6 from "../../assets/model_img_6.jpg";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import model_img_3 from "../../assets/model_img_3.jpg";
import useOnScreen from "../home/Animation";

const Home = () => {

  const [refHeading, isHeadingVisible] = useOnScreen({ threshold: 0.1 });
  const [refTestimonial, isTestimonialVisible] = useOnScreen({ threshold: 0.1 })

  return (
    <>
      <Navbar />
      <div className="home_container">
        <Container>
          <div className="home_box">
            <Row className="home_particion">
              <Col lg={6}>
                <div  className={`home_heading ${isHeadingVisible ? "animate" : ""}`} ref={refHeading}>
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

            <Row className="shopping_box">
              <Col lg={6}>
                <div className="shopping_con">
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
          <div className="section_con">
            <Row>
              <Col lg={6}>
                <div className="img_box_2">
                  <img src={model_img_2} alt="model_img" />
                </div>
              </Col>

              <Col lg={6}>
              <div className="shopping_box_ani">
                <div className="sec_box_2">
                  <h3>One Size Does Not Fit All Your Needs</h3>
                  <div className="icon-text-box">
                    <span>
                      <FontAwesomeIcon icon={faMinus} className="minus-box1" />
                    </span>

                    <p>
                      At Oversize, we try to avoid the limits set by modern
                      society to help you look amazing and attractive all year
                      round.
                    </p>
                  </div>

                  <div>
                    <div className="icon-text-box">
                      <span>
                        <FontAwesomeIcon
                          icon={faComment}
                          className="icon-box"
                        />
                      </span>
                      <h5>You are convinced that...</h5>
                    </div>
                    <p>
                      Your body needs to fit modern standards, but we believe
                      that any body is beautiful.
                    </p>
                  </div>

                  <div>
                    <div className="icon-text-box">
                      <span>
                        <FontAwesomeIcon
                          icon={faFaceFrownOpen}
                          className="icon-box"
                        />
                      </span>
                      <h5>You are forced to...</h5>
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
        {/* ---------------------------------------------------------- */}
        <div className="test_bg">
        <div ref={refTestimonial} className={isTestimonialVisible ? "animate" : ""}>
          <h3>Testimonials</h3>
          <div className="testimonials-container">
            <div className="testmonial_con">
              <img src={model_img_4} alt="model_img" />
              <div className="icon-text-box">
                <span>
                  <FontAwesomeIcon icon={faQuoteLeft} className="icon-quate" />
                </span>
                <p>
                  Unlike other plus size vendors, I've noticed that you really
                  listen to your customers.
                </p>
              </div>
              <div className="icon-text-box name-icon">
                <h5>Susan Boyle</h5>
                <span>
                  <FontAwesomeIcon icon={faInstagram} className="icon-quate" />
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
                  <FontAwesomeIcon icon={faQuoteLeft} className="icon-quate" />
                </span>
                <p>
                  I like your recent range of plus size dresses. Your products
                  look great and suit me.
                </p>
              </div>
              <div className="icon-text-box name-icon">
                <h5>Ann Smith</h5>
                <span>
                  <FontAwesomeIcon icon={faInstagram} className="icon-quate" />
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
                  <FontAwesomeIcon icon={faQuoteLeft} className="icon-quate" />
                </span>
                <p>
                  I’m really amazed by the quality of customer service you
                  offer. Thank you for what you do!
                </p>
              </div>
              <div className="icon-text-box name-icon">
                <h5>Kate Williamse</h5>
                <span>
                  <FontAwesomeIcon icon={faInstagram} className="icon-quate" />
                </span>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="review_btn">Send your review</button>
          </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------------------------- */}
        <Container>
          <Row className="position-relative">
            <Col className="contact_box">
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

              <div>
                <p>
                  Here we make sure that every woman can afford the best
                  plus-size clothes without altering them to their body size. We
                  can do it all for you quicker than anyone else.
                </p>
              </div>
              <button className="contact_btn">Contact Us</button>
            </Col>

            <Col className="model_img">
              <img
                src="https://www.itl.cat/pngfile/big/13-133293_wallpaper-women-bag-fashion.jpg"
                alt=""
              />
            </Col>
            <Row>
              <Col lg={3} className="innerbox">
                <h4>
                  I know how hard it can be to find proper plus size clothes
                  that fit your personal image & lifestyle.
                </h4>
              </Col>
            </Row>
          </Row>
        </Container>
        {/* ------------------------------------------------------------- */}
        <Row>
          {/* <div className="our_gallery_bg"> */}
          <Col lg={8} className="our_gallery_con">
            <h2>Our Gallery</h2>
            <div className="icon-text-box">
              <span>
                <FontAwesomeIcon icon={faMinus} className="minus-box" />
              </span>
              <h5>
                Here you can take a look at our latest models of plus size
                clothes for women designed by Oversize.
              </h5>
            </div>
            <div className="button-con">
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
               {/* <div className="our_model_1">
        <img
          src="https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.jpg?s=612x612&w=0&k=20&c=UyxEiEddYEFQPAoopwYs-_8xJ5vp0vKE0Sl3GnrQpK8="
          alt="model_img"
        />
      </div> */}
      {/* <div className="our_model_2">
        <img
          src="https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg"
          alt="model_img"
        />
      </div> */}
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
        {/* ----------------------- */}
        <Container className="about_space">
          <Row className="about_us">
            <Col lg={5}>
              <div className="about_box">
                <div className="icon-text-box">
                  <span className="diamond-box">
                    <FontAwesomeIcon icon={faTags} className="icon-con" />
                  </span>
                  <h5>Affordable Prices</h5>
                </div>
                <p>
                  All our clothes are provided at great prices with regular
                  discounts.
                </p>

                <div className="icon-text-box">
                  <span className="diamond-box">
                    <FontAwesomeIcon icon={faCrown} className="icon-con" />
                  </span>
                  <h5>Individual Approach</h5>
                </div>
                <p>
                  Oversize is known for its unique approach to designing clothes
                  for its customers.
                </p>

                <div className="icon-text-box">
                  <span className="diamond-box">
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      className="icon-con"
                    />
                  </span>
                  <h5>A Wide Product Range</h5>
                </div>
                <p>
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
                <h3>Why do Women Choose Oversize Clothes?</h3>
                <div className="icon-text-box choose_us ">
                  <span>
                    <FontAwesomeIcon icon={faMinus} className="minus-con" />
                  </span>
                  <p>
                    We offer women a variety of benefits besides our clothes and
                    underwear. Watch this video to know more.
                  </p>
                </div>
                <img
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
        {/* ----------------------------------------------------- */}
      </div>
      <Footer />
    </>
  );
};
export default Home;
