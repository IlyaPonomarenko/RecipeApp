import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "../Styles/Recipies.css";

const Recipies = () => {
  const [recipiesData, setRecipiesData] = useState([]);
  const [searchData, setSearchData] = useState({
    value:""
  });

  useEffect(() => {
    axios.get("http://localhost:3000/recipes").then((res) => {
      setRecipiesData(res.data);
    });
  }, []);

  const searchInputHandler = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const searchHandler = recipiesData.filter((recipie) => {
    return recipie.name.toLowerCase().includes(searchData.value.toLowerCase());
  });

  return (
    <div className="recipies-wrapper">
      <div className="recipies-search">
        <label>
          Search for recipe:
          <input type="text" name="value" onChange={searchInputHandler} />
        </label>
      </div>
      <h2 className="title">Our recipies</h2>
      <div className="recipies-collection">
        {searchHandler.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              flag={recipe.flag}
              image={recipe.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipies;
