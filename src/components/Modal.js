import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        </Box>
      </Modal>
    </div>
  );
}