import React from "react";

function SearchBox(props) {
  const { searchQuery, setSearchQuery } = props;

  return (
    <div className="box">
      <div> Search task </div>
      <input
        value={searchQuery}
        id="searchItem"
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      {/* <button
      // onClick={() => {
      //   const newList = list.filter((item) => item.startsWith(searchQuery));
      //   setList(newList); */}
      {/* //   setSearchQuery("");
      // }}
    //   > */}
      {/* //     {" "}
    //     Search Task{" "}
    //   </button> */}
    </div>
  );
}

export default SearchBox;
