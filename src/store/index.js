import { configureStore } from "@reduxjs/toolkit";
import ClothingSlice from "./Clothing";
import ElectronicsSlice from "./Electronics";
import FurnitureSlice from "./Furniture";
import GamesSlice from "./Games";
import LuggageSlice from "./Luggage";
import ToysSlice from "./Toys";
import UtensilsSlice from "./Utensils";
import WinterCollectionSlice from "./WinterCollection";
import MyCartSlice from "./MyCart";
import LoginSlice from "./Login";
import SearchSlice from "./Search";
import ResponsiveSlice from "./ResponsiveButton";

const store = configureStore({
  reducer: {
    Clothing: ClothingSlice.reducer,
    Electronics: ElectronicsSlice.reducer,
    Furniture: FurnitureSlice.reducer,
    Games: GamesSlice.reducer,
    Luggage: LuggageSlice.reducer,
    Toys: ToysSlice.reducer,
    Utensils: UtensilsSlice.reducer,
    WinterCollection: WinterCollectionSlice.reducer,
    MyCart: MyCartSlice.reducer,
    Login: LoginSlice.reducer,
    Search: SearchSlice.reducer,
    Responsive: ResponsiveSlice.reducer,
  },
});
export default store;
