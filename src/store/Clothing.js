import { createSlice } from "@reduxjs/toolkit";

const ClothingSlice = createSlice({
  name: "clothing",
  initialState: {
    elem: [
      {
        Heading: "ANRABESS Women's Open Front Knit Lightweight Cardigan",
        Price: "49.99",
        Rating: 8.4,
        image: "Clothing1.png",
      },
      {
        Heading:
          "Amazon Essentials Henley Long Sleeve Shirts for Men, Regular-Fit Waffle",
        Price: "19",
        Rating: 7.9,
        image: "Clothing2.png",
      },
      {
        Heading: "ANRABESS Women Striped Oversized Sweatshirt Long Sleeve",
        Price: "19.99",
        Rating: 9.6,
        image: "Clothing3.png",
      },
      {
        Heading: "COOFANDY Men's Linen Shirts Short Sleeve Casual Shirts",
        Price: "29.99",
        Rating: 8.6,
        image: "Clothing4.png",
      },
      {
        Heading: "AUTOMET Womens Long Sleeve Shirts Pleated Crew Neck",
        Price: "17.99",
        Rating: 9.3,
        image: "Clothing5.png",
      },
      {
        Heading: "Disamer Tank Tops for Women 2024 Summer Tops Casual",
        Price: "15.94",
        Rating: 9.5,
        image: "Clothing6.png",
      },
    ],
  },
});
export default ClothingSlice;
