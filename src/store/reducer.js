const storedData = JSON.parse(localStorage.getItem("todoList"));
const initialTasks = storedData ? storedData : [];

export function taskReducer(tasks = initialTasks, action) {
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

export function taskUpdateStateReducer(update = false, action) {
  if (action.type === "update/true") {
    return true;
  }

  if (action.type === "update/false") {
    return false;
  }

  return update;
}

export function taskUpdateIdReducer(updateId = "", action) {
  if (action.type === "updateId/set") {
    return action.payload;
  }

  if (action.type === "updateId/unset") {
    return "";
  }

  return updateId;
}
