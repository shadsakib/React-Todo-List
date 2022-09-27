import React from "react";

function SearchBox(props) {
  const { searchQuery, onChange } = props;

  // const searchTask = function () {
  //   console.log(search);
  //   search = "";
  // };

  return (
    <div className="box">
      <div> Search task </div>
      <input
        value={searchQuery}
        id="searchItem"
        type="text"
        onChange={(e) => {
          onChange(e);
          // search = e.target.value;
        }}
      />
      {/* <button onClick={searchTask}> Search </button> */}
    </div>
  );
}

export default SearchBox;
