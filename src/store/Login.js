import { createSlice } from "@reduxjs/toolkit";
function roundToNDecimals(number, n) {
  return Number(number.toFixed(n));
}

const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    name: "",
    username: "",
    email: "",
    amount: 0,
    elemShop: [],
  },
  reducers: {
    UpdateValues: (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      return state;
    },
    UpdatePurchasedElem: (state, action) => {
      state.amount += action.payload.money;
      state.amount = roundToNDecimals(state.amount, 2);
      state.elemShop = [...state.elemShop, ...action.payload.elem];
      return state;
    },
  },
});
export default LoginSlice;
export const LoginActions = LoginSlice.actions;
