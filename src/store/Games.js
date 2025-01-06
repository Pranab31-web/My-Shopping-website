import { createSlice } from "@reduxjs/toolkit";

const GamesSlice = createSlice({
  name: "Game",
  initialState: {
    elem: [
      {
        Heading: "BATURU Mexican Train Dominoes Set for Adults",
        Price: "33.99",
        Rating: 8.1,
        image: "Games1.png",
      },
      {
        Heading: "Magnetic Dart Board - 12pcs Magnetic Darts",
        Price: "25.99",
        Rating: 9.2,
        image: "Games2.png",
      },
      {
        Heading: "AMEROUS 16 Inches Wooden Chess Set",
        Price: "188.99",
        Rating: 9.9,
        image: "Games3.png",
      },
      {
        Heading: "Fast Sling Puck Slingshot Games for Ages 6 and Up",
        Price: "71.99",
        Rating: 8.9,
        image: "Games4.png",
      },
      {
        Heading: "Hasbro Gaming Taboo Party Board Game",
        Price: "24.99",
        Rating: 9.3,
        image: "Games5.png",
      },
      {
        Heading: "Hasbro Gaming Catch Phrase Electronic Game ",
        Price: "23.99",
        Rating: 8.9,
        image: "Games6.png",
      },
    ],
  },
});
export default GamesSlice;
