import { createSlice } from "@reduxjs/toolkit";

const ResponsiveSlice = createSlice({
  name: "Responsive",
  initialState: {
    clicked: false,
  },
  reducers: {
    clicked: (state) => {
      state.clicked = !state.clicked;
      return state;
    },
  },
});
export default ResponsiveSlice;
export const ResponsiveAction = ResponsiveSlice.actions;
