import React from "react";
import { TextField } from "@mui/material";

function SearchBox(props) {
  const { searchQuery, onChange } = props;

  return (
    <div className="box">
      {/* <div> Search task </div> */}
      <TextField
        value={searchQuery}
        id="searchItem"
        variant="outlined"
        label="Search for tasks"
        size="small"
        InputProps={{ style: { background: "white" } }}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </div>
  );
}

export default SearchBox;
