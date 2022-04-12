import React from "react";
// import { ElfsightWidget } from "react-elfsight-widget";
import wine_glasses from "../images/wine_glasses.png";
import WineForm from "./WineForm";
import MyWines from "./MyWines";

function Home({ wines }) {
  return (
    <>
      <p className="line-1 anim-typewriter">
        Life is complicated. Wine doesn't have to be.
      </p>
      <br />
      <p className="line-2 anim-typewriter-2">
        Answer a few short questions to get started.
      </p>
      <WineForm
      // wines={wines}
      // setWineTypeInput={setWineTypeInput}
      // setFoodInput={setFoodInput}
      // wines={filterByFood}
      />

      {/* <ElfsightWidget widgetID="8532322e-e769-4123-943d-3621ceb37441" /> */}
      <img src={wine_glasses} className="pouring" alt="pouring wine" />
    </>
  );
}

export default Home;
