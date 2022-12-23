import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Recipies = () => {
  const [recipiesData, setRecipiesData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/recipes").then((res) => {
      setRecipiesData(res.data);
    });
  }, []);

  return (
    <div className="recipies-wrapper">
        <div className="recipies-search">
            <label> Search for recipe:
            <input type="text" name="search" />
            </label>
        </div>
        <div className="recipies-collection">
            {recipiesData.map((recipe) =>{
                return(
                    <Card
                    id={recipe.id}
                    name={recipe.name}
                    flag={recipe.flag}
                    image={recipe.image}
                    />
                )
            })}
        </div>
    </div>

  );
};

export default Recipies;
