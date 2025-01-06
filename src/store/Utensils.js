import { createSlice } from "@reduxjs/toolkit";

const UtensilsSlice = createSlice({
  name: "Utensils",
  initialState: {
    elem: [
      {
        Heading: "HIWARE 48-Piece Silverware Set",
        Price: "28.95",
        Rating: 7.6,
        image: "Utensil1.png",
      },
      {
        Heading: "360 Count Extra Heavy Duty Clear Plastic Silverware",
        Price: "21.99",
        Rating: 8.8,
        image: "Utensil2.png",
      },
      {
        Heading: "2ZEBRAZ 100% Bamboo Cutlery Set",
        Price: "16.95",
        Rating: 8,
        image: "Utensil3.png",
      },
      {
        Heading: "Party Bargains Disposable Cutlery set",
        Price: "21.74",
        Rating: 8.9,
        image: "Utensil4.png",
      },
      {
        Heading: "Umite Chef Kitchen Cooking Utensils Set",
        Price: "22.78",
        Rating: 9.5,
        image: "Utensil5.png",
      },
      {
        Heading: "KINGSTONE Silverware Set",
        Price: "19.99",
        Rating: 7.9,
        image: "Utensil6.png",
      },
    ],
  },
});
export default UtensilsSlice;
