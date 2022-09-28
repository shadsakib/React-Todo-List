import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "update",
  initialState: false,
  reducers: {
    updateOn: (update, action) => {
      return true;
    },
    updateOff: (update, action) => {
      return false;
    },
  },
});

export const { updateOn, updateOff } = updateSlice.actions;

export default updateSlice.reducer;
