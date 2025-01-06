import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
  name: "MyCart",
  initialState: { cart: [] },
  reducers: {
    addingElem: (state, action) => {
      const arr = state.cart.filter((e) => {
        if (action.payload.Heading != e.Heading) {
          return e;
        }
      });
      state.cart = [...arr, action.payload];
      return state;
    },
    DeleteElem: (state, action) => {
      state.cart = state.cart.filter((elem) => {
        if (elem.Heading != action.payload.Heading) {
          return elem;
        }
      });
      return state;
    },
    ClearCart: (state) => {
      state.cart = [];
      return state;
    },
  },
});
export default MyCartSlice;
export const MyCartActions = MyCartSlice.actions;
