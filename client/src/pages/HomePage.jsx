import React from "react";

// styles -----------------------------------
import "../style/HomePage.css";

// image -------------------------------------
import image from "../static/planet.png"

// Components -------------------------------
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="title"><h1>Welcome in Terra</h1></div>
      <div className="circleContainer">
        <div className="circleContainerStyle">
          <div className="circle">
            <img className="planet_foto" src={image} alt="planet" />

            <Link className="circle1" to="/firstyear">1st year</Link>
            <Link className="circle2" to="/secondyear">2st year</Link>
            <Link className="circle3" to="/thirdyear">3st year</Link>
            <Link className="circle4" to="/fourthyear">4st year</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
