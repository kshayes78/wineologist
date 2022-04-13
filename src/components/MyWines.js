import React from "react";
// import Login from "./Login";
import MyWinesContainer from "./MyWinesContainer";

function MyWines({ favorites }) {
  return (
    <div>
      {/* <Login /> */}
      <MyWinesContainer favorites={favorites} />
    </div>
  );
}

export default MyWines;
