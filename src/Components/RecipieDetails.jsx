import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const RecipieDetails = () => {
  const [recipeDetails, setRecipieDetails] = useState();
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes/${params.recipiesingle}`).then((res) => {
      setRecipieDetails(res.data);
    });
  }, []);

  return (
    <div className="details-wrapper">
      <div className="details-name">
        <h2>{recipeDetails.name}</h2>
      </div>
      <div className="details-info">
        <div className="details-image">
          <img src={recipeDetails.image} alt={recipeDetails.name} />
        </div>
      </div>
    </div>
  );
};

export default RecipieDetails;
