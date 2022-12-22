import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import AddNewRecipie from "./Components/AddNewRecipie";
import Home from "./Components/Home";
import Recipies from "./Components/Recipies";
import Layout from "./Pages/Layout";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="allrecipies" element={<Recipies/>}/>
        <Route path="addnewrecipe" element={<AddNewRecipie/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
