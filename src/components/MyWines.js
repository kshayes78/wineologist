import React, { useEffect, useState } from "react";
import WineCalc from "./WineCalc";
import MyWinesContainer from "./MyWinesContainer";

function MyWines({ currentUser }) {
  //set user's favorite wines
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/favorite_wines")
      .then((res) => res.json())
      .then(setFavorites);
  }, []);

  //delete user's favorite wine
  function deleteWine(favoriteWineId) {
    const updatedWines = favorites.filter((fav) => fav.id !== favoriteWineId);
    setFavorites(updatedWines);
  }

  return (
    <div>
      <WineCalc />
      <MyWinesContainer
        favorites={favorites}
        currentUser={currentUser}
        deleteWine={deleteWine}
      />
    </div>
  );
}

export default MyWines;
