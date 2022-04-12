import React from "react";
// import WineCard from "./WineCard";
import Modal from "./Modal";

function WineContainer({ wines }) {
  const createWineCards = wines.map((wine) => (
    // <WineCard
    //   key={wine.id}
    //   id={wine.id}
    //   name={wine.name}
    //   description={wine.description}
    //   price={wine.price}
    //   varietal={wine.varietal}
    //   abv={wine.abv}
    //   taste={wine.taste}
    //   body={wine.body}
    //   image={wine.image}
    //   foods={wine.foods}
    //   url={wine.url}
    // />
    <Modal
      key={wine.id}
      id={wine.id}
      name={wine.name}
      description={wine.description}
      price={wine.price}
      varietal={wine.varietal}
      abv={wine.abv}
      taste={wine.taste}
      body={wine.body}
      image={wine.image}
      foods={wine.foods}
      url={wine.url}
    />
  ));
  return (
    <div className="cards">
      {/* <h3>Wine Page</h3> */}
      {createWineCards}
    </div>
  );
}

export default WineContainer;
