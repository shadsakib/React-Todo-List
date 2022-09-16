import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import InputBox from "./components/InputBox.jsx";
import SearchBox from "./components/SearchBox.jsx";

function App() {
  const [list, setList] = useState(["Walk", "Stretch", "Clean"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState();

  return (
    <div className="App">
      <h1> To-do List App </h1>
      <div> </div>
      <div className="main">
        <div className="container1">
          <InputBox
            list={list}
            setList={setList}
            input={input}
            setInput={setInput}
            update={update}
            setUpdate={setUpdate}
            updateId={updateId}
          />
          <SearchBox
            list={list}
            setList={setList}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <TodoList
          list={list}
          setList={setList}
          searchQuery={searchQuery}
          input={input}
          setInput={setInput}
          update={update}
          setUpdate={setUpdate}
          updateId={updateId}
          setUpdateId={setUpdateId}
        />
      </div>

      <div> </div>
    </div>
  );
}

export default App;
