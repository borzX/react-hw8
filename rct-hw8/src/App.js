import "./App.css";
import React from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import HeaderBottom from "./components/headerBottom";
import HeaderTop from "./components/headerTop";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <HeaderTop />
      <HeaderBottom />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
