import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/AddNewRecipie.css";
const AddNewRecipie = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    flag: "",
    image: "",
    ingredients: {},
    directions: "",
  });
  const [countriesData, setCountries] = useState([]);
  const [addedIngredients, setAddedIngredients] = useState([
    { ingredient: "", quantity: "" },
  ]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  let countryNames = [];
  countryNames.push(
    countriesData.map((country) => {
      return country.name.common;
    })
  );

  const inputDataHandler = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const countryPickHandler = (e) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${e.target.value}`)
      .then((res) => {
        setRecipeData({
          ...recipeData,
          flag: res.data[0].flags?.svg,
          country: res.data[0].name.common,
        });
      });
  };

  const newIngredientsField = (e) => {
    e.preventDefault();
    let newField = {
      ingredient: "",
      quantity: "",
    };
    setAddedIngredients([...addedIngredients, newField]);
  };
  const newIngredientsInputHandler = (e, index) => {
    let data = [...addedIngredients];
    data[index][e.target.name] = e.target.value;
    setAddedIngredients(data);
    setRecipeData({ ...recipeData, ingredients: addedIngredients });
  };
  const postHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/recipes", {
        name: recipeData.name,
        author: recipeData.author,
        country: recipeData.country,
        flag: recipeData.flag,
        description: recipeData.description,
        image: recipeData.image,
        ingredients: recipeData.ingredients,
        directions: recipeData.directions,
      })
      .then((res) => window.location.reload());
  };

  return (
    <div className="new-recipe-wrapper">
      <h2 className="h2-new-recipe">Add a new recipe</h2>
      <form>
        <label className="form-input-title">
          {" "}
          Name:
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={inputDataHandler}
          />
        </label>

        <label className="form-input-title">
          {" "}
          Author:
          <input
            required
            type="text"
            name="author"
            id="author"
            onChange={inputDataHandler}
          />
        </label>

        <label className="form-input-title">
          {" "}
          Recipe is from:
          <select
            required
            name="country"
            id="country"
            onChange={countryPickHandler}
          >
            {countryNames[0].map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </label>

        <label className="form-input-title">
          Description:
          <textarea
            required
            name="description"
            id="description"
            onChange={inputDataHandler}
          ></textarea>
        </label>

        <label className="form-input-title">
          Image:
          <input
            required
            type="url"
            name="image"
            id="image"
            onChange={inputDataHandler}
          />
        </label>
        <label className="form-input-title">
          Ingredients:
          {addedIngredients.map((ingredient, index) => {
            return (
              <div className="ingredients-field" key={index}>
                <div className="one-input">
                  <label className="form-input-title">
                    Ingredient:
                    <input
                      type="text"
                      name="ingredient"
                      id="ingredient"
                      onChange={(e) => newIngredientsInputHandler(e, index)}
                    />
                  </label>
                </div>
                <div className="one-input">
                  <label className="form-input-title">
                    Quantity:
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      onChange={(e) => newIngredientsInputHandler(e, index)}
                    />
                  </label>
                </div>
              </div>
            );
          })}
          <button className="addIngredients-btn" onClick={newIngredientsField}>
            add more
          </button>
        </label>
        <label className="form-input-title">
          Directions:
          <textarea
            required
            name="directions"
            id="directions"
            onChange={inputDataHandler}
          ></textarea>
        </label>
        <button
          className="post-btn"
          type="submit"
          id="submit"
          onClick={postHandler}
        >
          Post recipe
        </button>
      </form>
    </div>
  );
};

export default AddNewRecipie;
