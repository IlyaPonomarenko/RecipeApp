import React from "react";
import HeroBanner from "./HeroBanner";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home-wrapper">
      <HeroBanner />
      <div className="Home-header">
        <h2>Looking for new recipies?</h2>
      </div>
      <div className="Home-cards-wrapper">
        <div className="Home-card">
          <h2>Browse recipes</h2>
          <p>
            Find your favourites in this collection. You can search recipes
            based on name or country
          </p>
          <Link to="allrecipies">All recipes</Link>
        </div>

        <div className="Home-card">
          <h2>Add a recipe</h2>
          <p>
           Recipe from your country is missing? No worries, add one!
          </p>
          <Link to="addnewrecipe">Add recipe</Link>
        </div>

        <div className="Home-card">
          <h2>Want to know more about our projects?</h2>
          <p>
            Visit our programme homepage
          </p>
          <a href="https://en.bc.fi" target="_blanj noreferer"></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
