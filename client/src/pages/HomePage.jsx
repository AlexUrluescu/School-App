import React from "react";

import "../style/HomePage.css";

// Components -------------------------------
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="title">Welcome in Terra</div>
      <div className="circleContainer">
        <div className="circleContainerStyle">
          <div className="circle">
            <div className="circle1">1</div>
            <div className="circle2">2</div>
            <div className="circle3">3</div>
            <div className="circle4">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
