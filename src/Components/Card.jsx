import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, flag, image }) => {
  return (
    <div className="recipe-card">
      <div className="recipie-img-wrapper">
        <img src={image} alt="recipe.png" />
      </div>
      <div className="recipe-desc">
        <h2 className="recipe-name">{name}</h2>
        <img src={flag} alt="country.svg" />
      </div>
      <div>
        <Link to={`${id}`}>See more</Link>
      </div>
    </div>
  );
};

export default Card;
