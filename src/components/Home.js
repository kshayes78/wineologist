import React, { useState } from "react";
// import { ElfsightWidget } from "react-elfsight-widget";
import wine_glasses from "../images/wine_glasses.png";
// import WineContainer from "./WinePage";
import WineForm from "./WineForm";
// import { Routes, Route } from "react-router-dom";
// import AgeVerify from "./AgeVerify";

function Home() {
 
  return (
    <div className="home">
      {/* <AgeVerify /> */}
      <div className="type">
        <p className="line-1 anim-typewriter">
          Life is complicated. Wine doesn't have to be.
        </p>
        <br />
        <p className="line-2 anim-typewriter-2">
          Answer a few short questions to get started.
        </p>

        <WineForm/>

        <img src={wine_glasses} className="pouring" alt="pouring wine" />
      </div>
    </div>
  );
}

export default Home;
