import React from "react";
import MyWineCard from "./MyWineCard";
import Grid from "@mui/material/Grid";

function MyWinesContainer({ favorites, currentUser }) {
  const createMyWineCards = favorites.map((favorite) => (
    <MyWineCard
      key={favorite.user_id}
      favorite={favorite}
      image={favorite.image}
      description={favorite.description}
      currentUser={currentUser}
    />
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
