import React from "react";
import Grid from "@mui/material/Grid";

function MyWineCard({ favorite, currentUser, deleteWine }) {
  //   console.log(favorite);

  function handleDelete() {
    fetch(`http://localhost:3000/favorite_wines/${favorite.id}`, {
      method: "DELETE",
    });
    deleteWine(favorite.id);
    alert(`Successfully deleted ${favorite.Wine.name} from your collection!`);
  }

  return (
    <Grid item xs={3}>
      <img
        className="wine-description"
        src={favorite.Wine.image}
        alt="wine-pic"
      />
      <p>{favorite.Wine.description}</p>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </Grid>
  );
}

export default MyWineCard;
