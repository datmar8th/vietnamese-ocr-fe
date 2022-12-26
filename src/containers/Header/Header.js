import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css"

const Header = () => {
  return (
    <React.Fragment>
      <Navbar />
      <header id="home">
        <Navbar />
        <div class="banner">
          <div class="container">
            <h1>nhận dạng chữ viết tiếng việt</h1><br />
            <h2>Vietnamese Handwriting Regconition</h2>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
