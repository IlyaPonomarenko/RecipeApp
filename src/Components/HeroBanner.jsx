import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div>
      <video autoPlay="autoplay" muted={true} loop={true} className="video">
        <source src={require("../Assets/video.mp4")} type="video/mp4" />
      </video>
      <div className="banner-header">
        <h1>TasteIT</h1>
        <p>TasteIT is a recipe app which is made in REACT22S group lessons.</p>
        <div>
          <Link className="button" to="allrecipies">
            Check out all recipies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
