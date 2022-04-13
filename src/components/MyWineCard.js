import React from "react";
import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import WineBarTwoToneIcon from "@mui/icons-material/WineBarTwoTone";

function MyWineCard({ user_id, wine_id, favorite }) {
  //   const addToFavorites = () => {
  //     fetch(`http://localhost:3000/favorite_wines/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ user_id: user_id, wine_id: wine_id }),
  //     }).then((res) => res.json());
  //   };

  return (
    <div>
      <Button
        // startIcon={
        // //   <WineBarTwoToneIcon hover="none" color="success" sx="large" />
        // }
        classname="button"
        // onSubmit={addToFavorites}
        style={{ color: "crimson" }}
      >
        Add to Favorites
      </Button>
    </div>
  );
}

export default MyWineCard;
