import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: { SearchValue: "" },
  reducers: {
    ChangeSearchValue: (state, action) => {
      state.SearchValue = action.payload;
      return state;
    },
  },
});
export default SearchSlice;
export const SearchActions = SearchSlice.actions;
