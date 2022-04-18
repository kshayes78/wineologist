import React from "react";
// import WineCard from "./WineCard";
import Modal from "./Modal";
import Search from "./Search";

function WineContainer({ wines, currentUser, searchTerm, setSearchTerm }) {
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
      wine_type={wine.wine_type}
      varietal={wine.varietal}
      abv={wine.abv}
      taste={wine.taste}
      body={wine.body}
      image={wine.image}
      foods={wine.foods}
      url={wine.url}
      wine={wine}
      currentUser={currentUser}
    />
  ));
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="wineContainer">{createWineCards}</div>
    </>
  );
}

export default WineContainer;
