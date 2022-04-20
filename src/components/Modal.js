import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Grid from "@mui/material/Grid";
import StarRating from "./StarRating";
import WineBarTwoToneIcon from "@mui/icons-material/WineBarTwoTone";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  name,
  price,
  image,
  description,
  foods,
  abv,
  varietal,
  wine_type,
  url,
  currentUser,
  id,
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  //   const handleOpen = () => console.log(currentUser.id);
  const handleClose = () => setOpen(false);

  function addToFavorites() {
    // e.preventDefault();
    fetch(`http://localhost:3000/favorite_wines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ User_id: currentUser.id, Wine_id: id }),
    }).then((res) => res.json());
    handleClose();
    alert(`Added ${name} to My Wines`);
  }

  const foodInfo = foods.map((food) => (
    <div>
      <a href={food.url} target="_blank" rel="noreferrer">
        <img src={food.image} className="food_pic" alt="food pic" />
      </a>
      <p>{food.name}</p>
    </div>
  ));

  return (
    <div className="wineCard">
      <button onClick={handleOpen}>
        <span className="blurb">
          <h1>{name}</h1>
          <br />
          <span>
            <p>
              <strong>${price}</strong>
            </p>
          </span>
          <br />
          <span>
            <strong>
              Type
              <br /> {wine_type}
            </strong>
          </span>

          <img src={image} alt={name} className="wines" />
        </span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p>{description}</p>
            <p>Varietal: {varietal}</p>
            <p>abv {abv}</p>
            <a href={url} target="_blank" rel="noreferrer">
              Where to Buy
            </a>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Pairs well with:
            <span className="foods">{foodInfo}</span>
          </Typography>
          <Button
            startIcon={
              <WineBarTwoToneIcon hover="none" color="crimson" sx="large" />
            }
            classname="button"
            onClick={addToFavorites}
            style={{ color: "crimson" }}
          >
            Add to Favorites
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
