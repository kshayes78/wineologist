import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  function handleSubmit(e) {
    e.prevent.default();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search all Wines</label>
      <input
        type="text"
        id="search"
        placeholder="enter name or keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
