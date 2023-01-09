import React from "react";
import "../Styles/HeroBanner.css"
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="Banner-wrapper">
      <div className="Banner-header">
        <h1>TasteIT</h1>
        <p className="Banner-p">TasteIT is a recipe app which is made in REACT22S group lessons.</p>
          <Link className="Banner-button" to="allrecipies">
            Check out all recipies
          </Link>
      </div>
      <video autoPlay="autoplay" muted={true} loop={true} className="Banner-video">
        <source src={require("../Assets/video2.mp4")} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroBanner;
