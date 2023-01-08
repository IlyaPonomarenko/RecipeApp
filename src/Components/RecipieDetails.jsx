import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";

const RecipieDetails = () => {
  const {id} = useParams()
  const [recipeDetails, setRecipieDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/recipes/${id}`)
      .then((res) => {
        setRecipieDetails(res.data);
      });
      
  }, []);

  return (
    // <div className="details-wrapper">
    //   <div className="details-name">
    //     <h2>{recipeDetails.name}</h2>
    //   </div>
    //   <div className="details-info">
    //     <div className="details-image">
    //       <img src={recipeDetails.image} alt={recipeDetails.name} />
    //     </div>
    //   </div>
    // </div>
    <div>
    </div>
  );
};

export default RecipieDetails;
