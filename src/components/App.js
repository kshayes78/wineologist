import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import MyWines from "./MyWines";
import WinePage from "./WinePage";
import SignUp from "./SignUp";
import Search from "./Search";
// import WineForm from "./WineForm";

function App() {
  const [wines, setWines] = useState([]);
  // const [wineTypeInput, setWineTypeInput] = useState("");
  // const [foodInput, setFoodInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/wines")
      .then((r) => r.json())
      .then(setWines);
  }, []);

  // const filterByType = wines.filter((wine) =>
  //   wine.wine_type.toLowerCase().includes(wineTypeInput.toLowerCase())
  // );
  // const filterByFood = filterByType.filter((wine) =>
  //   wine.foods.toLowerCase().includes(foodInput)
  // );
  const [searchTerm, setSearchTerm] = useState("");
  const newFilteredList = wines.filter((wine) => {
    return (
      wine.name.toLowerCase().includes(searchTerm) ||
      wine.description.toLowerCase().includes(searchTerm) ||
      wine.wine_type.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mywines" element={<MyWines />} />
        <Route path="/wines" element={<WinePage wines={newFilteredList} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
