import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import InputBox from "./components/InputBox.jsx";
import SearchBox from "./components/SearchBox.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import useInput from "./hooks/useInput.js";

function App() {
  const [list, setList] = useLocalStorage("todoList");
  const [searchQuery, , onSearchChange] = useInput("");
  const [input, setInput, onInputChange, resetInput] = useInput("");
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
            onChange={onInputChange}
            resetInput={resetInput}
            update={update}
            setUpdate={setUpdate}
            updateId={updateId}
          />
          <SearchBox
            list={list}
            setList={setList}
            searchQuery={searchQuery}
            onChange={onSearchChange}
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
