import React from "react";
import ListItem from "./ListItem.jsx";

function TodoList(props) {
  const {
    list,
    setList,
    searchQuery,
    input,
    setInput,
    update,
    setUpdate,
    updateId,
    setUpdateId,
  } = props;

  return (
    <div>
      <h1> Your List</h1>
      <ol>
        {Array.from(list)
          .filter((listItem) => listItem.startsWith(searchQuery))
          .map((listItem, i) => (
            <ListItem
              id={i}
              key={i}
              name={listItem}
              list={list}
              setList={setList}
              input={input}
              setInput={setInput}
              update={update}
              setUpdate={setUpdate}
              updateId={updateId}
              setUpdateId={setUpdateId}
            />
          ))}
      </ol>
    </div>
  );
}

export default TodoList;
