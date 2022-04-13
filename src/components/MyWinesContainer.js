import React from "react";
import MyWineCard from "./MyWineCard";
import Grid from "@mui/material/Grid";

function MyWinesContainer({ favorites }) {
  const createMyWineCards = favorites.map((favorite) => (
    <MyWineCard key={favorite.id} favorite={favorite} />
  ));
  return (
    <div>
      <Grid container spacing={5}>
        {createMyWineCards}
      </Grid>
    </div>
  );
}

export default MyWinesContainer;
