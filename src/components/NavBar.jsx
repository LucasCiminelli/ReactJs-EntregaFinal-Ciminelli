import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export const NavBar = () => {
  const [isNav3Visible, setIsNav3Visible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNav3Visible(!isNav3Visible);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () =>{
    setIsNav3Visible(!isNav3Visible);
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container
          fluid
          className="banner-container d-flex justify-content-center align-items-center"
        >
          <p className="banner ms-auto me-auto">
            12 cuotas sin interés con todas las tarjetas
          </p>
        </Container>
      </Navbar>
      <div className="nav1 ">
        <Navbar bg="dark" data-bs-theme="dark" className="nav1 flex-wrap">
          <Container fluid className="px-3">
            <NavLink className="nav-link pe-3" onClick={handleMenuClick}>
              <i class="menu bi bi-list"></i>
            </NavLink>
            <NavLink className="logo" to="/" onClick={handleNavClick}>
              Gentlemen's Club
            </NavLink>
            <NavLink className="nav-link text-white" to="/cart" onClick={handleNavClick}>
              <CartWidget />
            </NavLink>
            <div className="nav-link ms-auto"></div>
            <Nav className="nav-link ms-auto">
              <NavLink to="/account" className="nav-link">
                <i className="ingresar bi bi-person-fill" onClick={handleNavClick}></i>
              </NavLink>
              <NavLink to="/account" className="nav-link">
                <i className="ingresar1 bi bi-person-fill"> Account</i>
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Navbar bg="dark" data-bs-theme="dark" className="nav2">
        <Container className="d-flex justify-content-center align-items-center">
          <row className="navegador">
            <Nav>
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
              <NavLink className="nav-link ms-3 " to="/products">
                Products
              </NavLink>
              <NavLink
                className="nav-link ms-3 "
                to="/category/t-shirt"
              >
                T-Shirts
              </NavLink>
              <NavLink
                className="nav-link ms-3 "
                to="/category/sweater"
              >
                Sweaters
              </NavLink>
              <NavLink
                className="nav-link ms-3 "
                to="/category/pants"
              >
                Pants
              </NavLink>
              <NavLink
                className="nav-link ms-3 "
                to="/category/shoes"
              >
                Shoes
              </NavLink>
              <NavLink className="nav-link ms-3 " to="/category/cap">
                Caps
              </NavLink>
            </Nav>
          </row>
        </Container>
      </Navbar>
      <div>
        <row className={isNav3Visible ? "nav3" : "actived  show"}>
          <Nav className="navegador2" bg="dark">
            <NavLink className="nav-link2 " to="/" onClick={handleMenuClick}>
              Home
            </NavLink>
            <NavLink className="nav-link2 " to="/products" onClick={handleMenuClick}>
              Products
            </NavLink>
            <NavLink className="nav-link2 " to="/category/t-shirt" onClick={handleMenuClick}>
              T-Shirts
            </NavLink>
            <NavLink className="nav-link2 " to="/category/sweater" onClick={handleMenuClick}>
              Sweaters
            </NavLink>
            <NavLink className="nav-link2 " to="/category/pants" onClick={handleMenuClick}>
              Pants
            </NavLink>
            <NavLink className="nav-link2   " to="/category/shoes" onClick={handleMenuClick}>
              Shoes
            </NavLink>
            <NavLink className="nav-link2  " to="/category/cap" onClick={handleMenuClick}>
              Caps
            </NavLink>
          </Nav>
        </row>
      </div>
    </div>
  );
};
