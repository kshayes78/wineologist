import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function NavBar({ searchTerm, setSearchTerm }) {
  const [showSearch, setShowSearch] = useState(false);
  function handleStateChange(e) {
    if (e.target.textContent === "Wines") {
      setShowSearch(true);
    } else setShowSearch(false);
  }

  return (
    <header className="header">
      {showSearch ? (
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      ) : null}
      <Link onClick={handleStateChange} to="/" className="link">
        Home
      </Link>

      <Link onClick={handleStateChange} to="/wines" className="link">
        Wines
      </Link>

      <Link
        onClick={handleStateChange}
        id="linkTwo"
        to="/mywines"
        className="link"
      >
        My Wines
      </Link>

      <Link onClick={handleStateChange} to="/signup" className="link">
        Sign Out
      </Link>
    </header>
  );
}

export default NavBar;
