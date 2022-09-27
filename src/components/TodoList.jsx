import React from "react";
import ListItem from "./ListItem.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function TodoList(props) {
  const { searchQuery, setInput } = props;

  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    if (tasks.length) localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1> Your List</h1>
      <ol>
        {tasks
          .filter((listItem) => listItem.name.startsWith(searchQuery))
          .map((listItem, i) => (
            <ListItem
              id={i}
              key={i}
              name={listItem.name}
              date={listItem.date}
              completed={listItem.completed}
              setInput={setInput}
            />
          ))}
      </ol>
    </div>
  );
}

export default TodoList;
