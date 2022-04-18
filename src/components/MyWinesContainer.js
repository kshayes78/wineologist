import React from "react";
import MyWineCard from "./MyWineCard";
import Grid from "@mui/material/Grid";

function MyWinesContainer({ favorites, currentUser, deleteWine }) {
  const createMyWineCards = favorites.map((favorite) => (
    <MyWineCard
      key={favorite.id}
      favorite={favorite}
      currentUser={currentUser}
      deleteWine={deleteWine}
    />
  ));
  return (
    <div>
      <Grid container justifyContent="center" spacing={5}>
        {createMyWineCards}
      </Grid>
    </div>
  );
}

export default MyWinesContainer;
