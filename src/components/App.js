import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import MyWines from "./MyWines";
import WinePage from "./WinePage";
import SignUp from "./SignUp";
// import Search from "./Search";
// import WineForm from "./WineForm";

//current user
function App() {
  const [wines, setWines] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then(setCurrentUser);
  }, []);

  //shows all wines
  useEffect(() => {
    fetch("http://localhost:3000/wines")
      .then((r) => r.json())
      .then(setWines);
  }, []);

  //set user's favorite wines
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/favorite_wines")
      .then((res) => res.json())
      .then(setFavorites);
  }, []);
  // function likeWine(wine) {
  //   setFavorites([...favorites, wine]);
  // }

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
      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home currentUser={currentUser} />} />
        <Route
          exact
          path="/mywines"
          element={<MyWines favorites={favorites} currentUser={currentUser} />}
        />
        <Route
          path="/wines"
          element={
            <WinePage
              wines={newFilteredList}
              currentUser={currentUser}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
