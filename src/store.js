import { configureStore, combineReducers } from "@reduxjs/toolkit";

const initialTasks = JSON.parse(localStorage.getItem("todoList"));

function taskReducer(tasks = initialTasks, action) {
  if (action.type === "task/add") {
    return [...tasks, action.payload];
  }

  if (action.type === "task/update") {
    const index = tasks.findIndex((_, id) => id === action.payload.id);
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], ...action.payload.newValue };
    return newTasks;
  }

  if (action.type === "task/remove") {
    return tasks.filter((_, id) => id !== action.payload.id);
  }

  return tasks;
}

function taskUpdateStateReducer(update = false, action) {
  if (action.type === "update/true") {
    return true;
  }

  if (action.type === "update/false") {
    return false;
  }

  return update;
}

function taskUpdateIdReducer(updateId = "", action) {
  if (action.type === "updateId/set") {
    return action.payload;
  }

  if (action.type === "updateId/unset") {
    return "";
  }

  return updateId;
}

const enhancers =
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore(
  {
    reducer: combineReducers({
      tasks: taskReducer,
      update: taskUpdateStateReducer,
      updateId: taskUpdateIdReducer,
    }),
  },
  enhancers
);
