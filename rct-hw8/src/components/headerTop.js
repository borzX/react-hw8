import React from "react";
import Cart from "./cart";
import { BrowserRouter, Router, Route, Link, NavLink } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <nav className="navigation container">
        <div className="navigation__top">
          <div className="navigation__top-leftSide">
            <img src="./img/group_2_18.png" alt="logo" />
            <a href="#">BRAND</a>
            <div className="Search-plane">
              <button className="btn__Browse">
                <p>Browse</p>
              </button>
              <div className="input__search">
                <input type="text" placeholder="   Search for Item..." />
              </div>
            </div>
          </div>
          <div className="navigation__top-rightSide">
            <Link to="/cart" element={<Cart />}>
            <img src="./img/cart.png" alt="cart" />
            </Link>


            <a href="registration.html">
              <button className="btn__MyAccount">
                <p>My Account</p>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderTop;
