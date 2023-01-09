import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddNewRecipie from "./Components/AddNewRecipie";
import Home from "./Components/Home";
import RecipieDetails from "./Components/RecipieDetails";
import Recipies from "./Components/Recipies";
import Layout from "./Pages/Layout";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="allrecipies" element={<Recipies/>}/>
        <Route path="allrecipies/:id" element={<RecipieDetails/>}/>
        <Route path="addnewrecipe" element={<AddNewRecipie/>}/>        
      </Route>
    </Routes>
  </BrowserRouter>
  );
 
}

export default App;
