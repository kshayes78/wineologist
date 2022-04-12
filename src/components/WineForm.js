import React, { useState } from "react";
import Select from "react-select";

function WineForm({ setFood, setWineTypeInput, wines }) {
  const [wineType, setWineType] = useState("");
  const [winePrice, setWinePrice] = useState("");
  const [wineFood, setWineFood] = useState("");
  //   const [formData, setFormData] = useState("");

  //   // create a function that handle the React-select event and
  //   // save the value of that event on an state every time the component change
  //   //   const handler = (event) => {
  //   //     const value = event.value;
  const priceOptions = [
    { value: "$", label: "Under $50" },
    { value: "$$", label: "$50-100" },
    { value: "$$$", label: "Over $100" },
  ];

  //   //   const highly_rated = [
  //   //     { value: "", label: "Yes" },
  //   //     { value: "", label: "No" },
  //   //   ];
  const wineOptions = [
    { value: "", label: "All" },
    { value: "White Wine", label: "White" },
    { value: "Red Wine", label: "Red" },
    { value: "Champagne & Sparkling", label: "Champagne or Sparkling" },
    { value: "Sweet", label: "Sweet" },
  ];
  //   //   const body = [
  //   //     { value: "", label: "Any" },
  //   //     { value: "Light", label: "Light" },
  //   //     { value: "Medium", label: "Medium" },
  //   //     { value: "Full", label: "Full" },
  //   //   ];

  const foodOptions = [
    { value: "", label: "All" },
    { value: "Beef", label: "Beef" },
    { value: "Venison", label: "Venison" },
    { value: "Pork", label: "Pork" },
    { value: "Poultry", label: "Poultry" },
    { value: "Seafood", label: "Seafood" },
    { value: "Vegetarian", label: "Vegetarian" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `http://localhost:3000/suggested_wines?price=${winePrice}&wine_type=${wineType}&foods=${wineFood}`
    )
      .then((res) => res.json())
      .then(wines);

    // const submitBody = {price: winePrice, wine_type: wineType, food: wineFood};
    // fetch("http://localhost:3000/suggested_wines", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(submitBody)
    // });
  }

  function handlePriceChange(e) {
    setWinePrice(e.value);
  }

  function handleTypeChange(e) {
    setWineType(e.value);
  }

  function handleFoodChange(e) {
    setWineFood(e.value);
  }

  // console.log(wineFood);

  return (
    <div className="filterSearch">
      <form onSubmit={handleSubmit}>
        <label>Select a Price Range</label>
        <Select
          className="dropdown"
          placeholder="Price Range"
          options={priceOptions}
          onChange={handlePriceChange}
        />
        <label>Select a wine type</label>
        <Select
          className="dropdown"
          placeholder="Wine Type"
          options={wineOptions}
          onChange={handleTypeChange}
        />
        <label>Select a Food</label>
        <Select
          className="dropdown"
          placeholder="What are you serving?"
          options={foodOptions}
          onChange={handleFoodChange}
        />
        <input type="submit" value=" Let's See Your Wines!" />
      </form>
    </div>
  );
}

export default WineForm;
