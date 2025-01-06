import { createSlice } from "@reduxjs/toolkit";

const ToysSlice = createSlice({
  name: "toys",
  initialState: {
    elem: [
      {
        Heading:
          "BLUEJAY Remote Control Car, 1:16 All Terrain High Speed RC Cars Truck",
        Price: "39.98",
        Rating: 8.7,
        image: "Toys1.png",
      },
      {
        Heading:
          "Fuwidvia 3 Pack Airplane Launcher Toys, 13.2'' LED Foam Glider Catapult Plane Toy",
        Price: "24.99",
        Rating: 9.4,
        image: "Toys2.png",
      },
      {
        Heading: "Dancing Talking Cactus Toy for Baby Toddler",
        Price: "23.97",
        Rating: 8,
        image: "Toys3.png",
      },
      {
        Heading:
          "Magnetic Tiles Kids Toys STEM Magnet Toys for Toddler Magnetic Blocks Building Toys",
        Price: "24.99",
        Rating: 8.9,
        image: "Toys4.png",
      },
      {
        Heading:
          "JOYIN Cartoon Cars, Soft Rubber Toy Car Set, Mini Toy Vehicles, Bath Toy Car for Toddlers",
        Price: "29.99",
        Rating: 9.8,
        image: "Toys5.png",
      },
      {
        Heading:
          "Hatchimals Alive, Mystery Hatch Pufficorn, Surprise Interactive Toy & Egg",
        Price: "39.00",
        Rating: 9.6,
        image: "Toys6.png",
      },
    ],
  },
});
export default ToysSlice;
