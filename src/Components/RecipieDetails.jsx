import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, React } from "react";
import "../Styles/RecipieDetails.css";

const RecipieDetails = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipieDetails] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes/${id}`).then((res) => {
      setRecipieDetails(res.data);
    });
  }, [id]);

  return (
    <div className="details-wrapper">
      <div className="details-name">
        <h1>{recipeDetails.name}</h1>
      </div>
      <div className="details-info">
        <div className="details-images">
          <img
            className="details-flag"
            src={recipeDetails.flag}
            alt={recipeDetails.country}
          />
          <img
            className="details-image"
            src={recipeDetails.image}
            alt={recipeDetails.name}
          />
        </div>
        <div className="details-additional-info">
          <h2 className="details-label">Author - {recipeDetails.author}</h2>
          <p>{recipeDetails.description}</p>
          <div>
          <h2 className="details-label">Recipie insctructions</h2>
          <p>{recipeDetails.directions}</p>
        </div>
        </div>
      </div>
      <div className="details-instructions">
        <div>
          <h2 className="details-label">Ingredients</h2>
          <ul className="details-ul">
            {recipeDetails.ingredients?.map((item) => (
              <li key={item.ingredient}>
                {item.ingredient} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipieDetails;
