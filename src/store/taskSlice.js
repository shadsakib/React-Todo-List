import { createSlice } from "@reduxjs/toolkit";

const storedData = JSON.parse(localStorage.getItem("todoList"));

const taskSlice = createSlice({
  name: "task",
  initialState: storedData,
  reducers: {
    addTask: (tasks, action) => {
      tasks.push(action.payload);
    },
    updateTask: (tasks, action) => {
      const index = tasks.findIndex((_, id) => id === action.payload.id);
      tasks[index] = { ...tasks[index], ...action.payload.newValue };
    },
    removeTask: (tasks, action) => {
      const index = tasks.findIndex((_, id) => id === action.payload.id);
      tasks.splice(index, 1);
    },
  },
});

export const { addTask, updateTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
