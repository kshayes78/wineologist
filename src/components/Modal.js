import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import WineBarTwoToneIcon from "@mui/icons-material/WineBarTwoTone";

const cardStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 40,
  p: 4,
  alignItems: "center",
};

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
  alignItems: "center",
};

export default function BasicModal({
  name,
  price,
  image,
  description,
  foods,
  abv,
  varietal,
  url,
  currentUser,
  id,
  wine,
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
  }

  const foodInfo = foods.map((food) => (
    <div>
      <a href={food.url}>
        <img src={food.image} className="food_pic" alt="food pic" />
      </a>
      <p>{food.name}</p>
    </div>
  ));

  return (
    <div sx={cardStyle} className="wineCard">
      <Button onClick={handleOpen}>
        <h1>{name}</h1>
        <p>abv:{abv}</p>
        <p>${price}</p>
        <p>varietal:{varietal}</p>
        <img src={image} alt={name} className="wines" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p>{description}</p>
            <a href={url}>Where to Buy</a>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Pairs well with:
            <span className="foods">{foodInfo}</span>
          </Typography>
          <Button
            startIcon={
              <WineBarTwoToneIcon hover="none" color="success" sx="large" />
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
