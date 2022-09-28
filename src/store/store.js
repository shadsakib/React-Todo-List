import { configureStore, combineReducers } from "@reduxjs/toolkit";

import taskReducer from "./taskSlice";
import taskUpdateStateReducer from "./updateSlice";
import taskUpdateIdReducer from "./updateIdSlice";

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
