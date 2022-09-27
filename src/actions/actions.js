import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("task/add");
export const updateTask = createAction("task/update");
export const removeTask = createAction("task/remove");
export const updateOn = createAction("update/true");
export const updateOff = createAction("update/false");
export const setUpdateId = createAction("updateId/set");
export const unsetUpdateId = createAction("updateId/unset");
