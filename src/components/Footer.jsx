import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer ">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fcf6f6"
          fill-opacity="1"
          d="M0,288L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
      <Container className="footer-container">
        <Row className=" mt-5">
          <div className=" col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <h6>Products</h6>
            <ul>
                <li>T-shirts</li>
                <li>Sweaters</li>
                <li>Pants</li>
                <li>Shoes</li>
                <li>Caps</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <h6>Get Help</h6>
            <ul>
                <li>Customer service</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Order Status</li>
                <li>Payment Options</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <h6>Company</h6>
            <ul>
                <li>About Us</li>
                <li>Corporate</li>
                <li>Blog</li>
                <li>Afiliate Program</li>
                <li>Contact us</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <h6>Tems & Conditions</h6>
            <ul>
                <li>Cookies Policy</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
            </ul>
          </div>
        </Row>
        <Row>
            <div className="social col-xs-12">
                <h6>Follow us</h6>
                <div>
                    <ul className="d-flex">
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-twitter"></i></li>
                        <li><i className="bi bi-github"></i></li>
                    </ul>
                </div>

            </div>
        </Row>
        <Row>
            <div className="text-center pb-0 pt-0 mt-0 mb-0">
                <p>2023. Created by Lucas Ciminelli. ©All rights reserved</p>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
