import React from "react";
// import Login from "./Login";
import MyWinesContainer from "./MyWinesContainer";

function MyWines({ favorites, currentUser }) {
  return (
    <div>
      {/* <Login /> */}
      <MyWinesContainer favorites={favorites} currentUser={currentUser} />
    </div>
  );
}

export default MyWines;
