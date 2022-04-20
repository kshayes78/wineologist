import React, { useState } from "react";
// import { ElfsightWidget } from "react-elfsight-widget";
import wine_glasses from "../images/wine_glasses.png";
// import WineContainer from "./WinePage";
import WineForm from "./WineForm";
// import { Routes, Route } from "react-router-dom";
import AgeVerify from "./AgeVerify";

function Home() {
  // const [suggestedWines, setSuggestedWines] = useState([]);

  // console.log(suggestedWines);
  return (
    <div className="home">
      <AgeVerify />
      <div className="type">
        <p className="line-1 anim-typewriter">
          Life is complicated. Wine doesn't have to be.
        </p>
        <br />
        <p className="line-2 anim-typewriter-2">
          Answer a few short questions to get started.
        </p>

        <WineForm
        // setSuggestedWines={setSuggestedWines}
        // wines={wines}
        // setWineTypeInput={setWineTypeInput}
        // setFoodInput={setFoodInput}
        // wines={filterByFood}
        />

        {/* <WineContainer wines={suggestedWines} /> */}

        {/* <ElfsightWidget widgetID="8532322e-e769-4123-943d-3621ceb37441" /> */}
        <img src={wine_glasses} className="pouring" alt="pouring wine" />
      </div>
    </div>
  );
}

export default Home;
