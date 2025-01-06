import { createSlice } from "@reduxjs/toolkit";

const ElectronicsSlice = createSlice({
  name: "Electronics",
  initialState: {
    elem: [
      {
        Heading: "Samsung Galaxy Tab A9+ Tablet 11” 64GB Android Tablet",
        Price: "149",
        Rating: 9.8,
        image: "Electronics1.png",
      },
      {
        Heading: "JBL Vibe Beam - True Wireless JBL Deep Bass Sound Earbuds",
        Price: "24.95",
        Rating: 9,
        image: "Electronics2.png",
      },
      {
        Heading: "JBL CHARGE 5 - Portable Waterproof (IP67) Bluetooth Speaker",
        Price: "139.95",
        Rating: 8.5,
        image: "Electronics3.png",
      },
      {
        Heading:
          "Frameo 10.1 Inch WiFi Digital Picture Frame, 1280x800 HD IPS Touch Screen Photo Frame",
        Price: "49.98",
        Rating: 9.2,
        image: "Electronics4.png",
      },
      {
        Heading:
          "LC-dolida Sleep Headphones, 3D Sleep Mask Bluetooth Wireless Music Eye Mask, Sleeping Headphones",
        Price: "23.99",
        Rating: 9.4,
        image: "Electronics5.png",
      },
      {
        Heading: "JBL Go 3 Eco - Portable Mini Bluetooth Speaker",
        Price: "29.95",
        Rating: 7.7,
        image: "Electronics6.png",
      },
    ],
  },
});
export default ElectronicsSlice;
