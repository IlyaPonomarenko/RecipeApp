import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
import "../Styles/RecipieDetails.css";

const RecipieDetails = () => {
  const {id} = useParams()
  const [recipeDetails, setRecipieDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/recipes/${id}`)
      .then((res) => {
        setRecipieDetails(res.data);
      });
      
  }, []);

  return (
    <div className="details-wrapper">
      <div className="details-name">
        <h2>{recipeDetails.name}</h2>
      </div>
      <div className="details-info">
        <div className="details-images">
          <img className="details-image" src={recipeDetails.image} alt={recipeDetails.name} />
          <img className="details-flag" src={recipeDetails.flag} alt={recipeDetails.country} />
        </div>
      </div>
    </div>
  );
};

export default RecipieDetails;
