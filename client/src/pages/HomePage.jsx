import React from "react";

import "../style/HomePage.css";

import image from "../static/planet.png"

// Components -------------------------------
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="title"><h1>Welcome in Terra</h1></div>
      <div className="circleContainer">
        <div className="circleContainerStyle">
          <div className="circle">
            <img className="planet_foto" src={image} alt="planet" />

            <div className="circle1">1st year</div>
            <div className="circle2">2nd year</div>
            <div className="circle3">3rd yeard</div>
            <div className="circle4">4th year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
