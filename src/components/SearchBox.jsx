import React from "react";

function SearchBox(props) {
  const { searchQuery, onChange } = props;

  return (
    <div className="box">
      <div> Search task </div>
      <input
        value={searchQuery}
        id="searchItem"
        type="text"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
