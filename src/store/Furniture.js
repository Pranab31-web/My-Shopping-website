import { createSlice } from "@reduxjs/toolkit";

const FurnitureSlice = createSlice({
  name: "Furniture",
  initialState: {
    elem: [
      {
        Heading:
          "YIYAN Garden Furniture Set 3 Pieces Patio Rattan Wicker Chairs",
        Price: "149.99",
        Rating: 8.7,
        image: "Furniture1.png",
      },
      {
        Heading: "Damoch Family™ Kids Table and Chair Set",
        Price: "159.99",
        Rating: 9,
        image: "Furniture2.png",
      },
      {
        Heading:
          "SONGMICS MAZIE Collection - 30 Inches Folding Storage Ottoman Bench",
        Price: "42.99",
        Rating: 8.1,
        image: "Furniture3.png",
      },
      {
        Heading: "Huuger Dresser for Bedroom, 63 Inch Dresser TV Stand",
        Price: "104.49",
        Rating: 9,
        image: "Furniture4.png",
      },
      {
        Heading: "Patchwork Cowhide Brown & White - Genuine Cowhide 8 x 5",
        Price: "99.99",
        Rating: 9.5,
        image: "Furniture5.png",
      },
      {
        Heading: "Easy-Going Sectional Couch Covers for Dogs L Shape Sofa",
        Price: "42.99",
        Rating: 7.3,
        image: "Furniture6.png",
      },
    ],
  },
});
export default FurnitureSlice;
