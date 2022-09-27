import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import InputBox from "./components/InputBox.jsx";
import SearchBox from "./components/SearchBox.jsx";
// import useLocalStorage from "./hooks/useLocalStorage.js";
import useInput from "./hooks/useInput.js";
import TaskView from "./components/TaskView.jsx";

function App() {
  // const [list, setList] = useLocalStorage("todoList");
  const [searchQuery, , onSearchChange] = useInput("");
  const [input, setInput, onInputChange, resetInput] = useInput("");
  // const [update, setUpdate] = useState(false);
  // const [updateId, setUpdateId] = useState();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <h1> To-do List App </h1>
            <div> </div>
            <div className="main">
              <div className="container1">
                <InputBox
                  input={input}
                  onChange={onInputChange}
                  resetInput={resetInput}
                />
                <SearchBox
                  searchQuery={searchQuery}
                  onChange={onSearchChange}
                />
              </div>
              <TodoList searchQuery={searchQuery} setInput={setInput} />
            </div>

            <div> </div>
          </div>
        }
      />
      <Route path="/task/:taskName" element={<TaskView />} />
    </Routes>
  );
}

export default App;
