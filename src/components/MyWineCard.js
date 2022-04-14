import React from "react";
import Grid from "@mui/material/Grid";

function MyWineCard({ favorite, image, description, currentUser }) {
  //   console.log(favorite);
  console.log(favorite);

  return (
    <Grid item xs={3}>
      <img
        className="wine-description"
        src={favorite.Wine.image}
        alt="wine-pic"
      />
      <p>{favorite.Wine.description}</p>
    </Grid>
  );
}

export default MyWineCard;
