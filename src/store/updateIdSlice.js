import { createSlice } from "@reduxjs/toolkit";

const updateIdSlice = createSlice({
  name: "updateId",
  initialState: "",
  reducers: {
    setUpdateId: (updateId, action) => {
      return action.payload;
    },
    unsetUpdateId: (updateId, action) => {
      return "";
    },
  },
});

export const { setUpdateId, unsetUpdateId } = updateIdSlice.actions;

export default updateIdSlice.reducer;
