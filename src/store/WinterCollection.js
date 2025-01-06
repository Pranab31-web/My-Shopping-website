import { createSlice } from "@reduxjs/toolkit";

const WinterCollectionSlice = createSlice({
  name: "WinterCollection",
  initialState: {
    elem: [
      {
        Heading: "Aloodor Sweatsuit for Women 2 Piece Outfits for Womens",
        Price: "35.98",
        Rating: 8,
        image: "WinterCollection1.png",
      },
      {
        Heading:
          "Viottiset Women's 2 Piece Outfits Sweatsuit Casual Knit Pullover Sweater Pajamas",
        Price: "49.99",
        Rating: 8.9,
        image: "WinterCollection2.png",
      },
      {
        Heading: "A World Full of Winter Stories: 50 Folk Tales and Legends",
        Price: "11.6",
        Rating: 9.9,
        image: "WinterCollection4.png",
      },
      {
        Heading:
          "TACVASEN Puffer Jacket for Men Winter Warm Winter Lightweight Coat",
        Price: "43.98",
        Rating: 9.2,
        image: "WinterCollection3.png",
      },
      {
        Heading:
          "ILLUME Noble Holiday Collection Winter White Vanity Tin Candle",
        Price: "28.48",
        Rating: 9.1,
        image: "WinterCollection5.png",
      },
      {
        Heading:
          "Scissor Skills - Cut and Paste Activity Book - Hello Winter - Volume 1",
        Price: "5.40",
        Rating: 8.2,
        image: "WinterCollection6.png",
      },
    ],
  },
});
export default WinterCollectionSlice;
