import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  function handleSubmit(e) {
    e.prevent.default();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">
        <strong>Search all Wines</strong>
      </label>
      <input
        type="text"
        id="search"
        autocomplete="on"
        autocorrect="off"
        placeholder="name or keyword 🔍"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <button type="submit">🔍</button> */}
    </form>
  );
}

export default Search;
