import React, { useState } from "react";
import Select from "react-select";

function WineCalc() {
  const [guestCount, setGuestCount] = useState("");
  const [hours, setHours] = useState("");
  const [bottles, setBottles] = useState("");

  const guestOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
  ];

  const durationOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  function handleGuests(e) {
    setGuestCount(e.value);
  }

  function handleDuration(e) {
    setHours(e.value);
  }

  function handleBottleCalc(e) {
    e.preventDefault();
    setBottles(Math.ceil((guestCount * 187.5 * hours) / 750));
    // console.log(bottles);
  }
  return (
    <div className="wine-calc">
      <h2>Try the Wine Calculator!</h2>
      <form onSubmit={handleBottleCalc}>
        <label>Select # of guests</label>
        <Select
          className="DropDown"
          placeholder="guest count"
          options={guestOptions}
          onChange={handleGuests}
        />
        <label>Select # of hours</label>
        <Select
          className="Dropdown"
          placeholder="hours"
          options={durationOptions}
          onChange={handleDuration}
        />
        <input
          type="submit"
          className="btn btn-white btn-animated"
          value="Calculate bottles"
        />
      </form>
      <h2>
        You will need {bottles} (750ml) bottles of wine for your event. <br />
        Drink responsibly!
      </h2>
    </div>
  );
}

export default WineCalc;
