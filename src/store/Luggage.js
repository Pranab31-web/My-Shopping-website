import { createSlice } from "@reduxjs/toolkit";
import GamesSlice from "./Games";

const LuggageSlice = createSlice({
  name: "games",
  initialState: {
    elem: [
      {
        Heading: "Amazon Basics Expandable Hardside",
        Price: "62.99",
        Rating: 8.1,
        image: "Luggage1.png",
      },
      {
        Heading: "LUGGEX Luggage with Spinner Wheels",
        Price: "99.99",
        Rating: 8.9,
        image: "Luggage2.png",
      },
      {
        Heading:
          "Samsonite Freeform Hardside Expandable with Double Spinner Wheels ",
        Price: "181.31",
        Rating: 9.6,
        image: "Luggage3.png",
      },
      {
        Heading: "Amazon Basics Suitcase, Hardside Luggage with Spinner Wheels",
        Price: "110.68",
        Rating: 8.9,
        image: "Luggage4.png",
      },
      {
        Heading:
          "Samsonite Omni PC Hardside Expandable Luggage with Spinner Wheels",
        Price: "159",
        Rating: 9.5,
        image: "Luggage5.png",
      },
      {
        Heading: "SwissGear Sion Softside Expandable Luggage",
        Price: "103.99",
        Rating: 9.7,
        image: "Luggage6.png",
      },
    ],
  },
});
export default LuggageSlice;
