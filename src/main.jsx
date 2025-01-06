import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./AddCart.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./SidebarComponents/Home.jsx";
import Utensils from "./Categories/Utensils";
import Luggage from "./Categories/Luggage";
import Games from "./Categories/Games";
import Clothing from "./Categories/Clothing";
import Furniture from "./Categories/Furniture";
import Electronics from "./Categories/Electronics";
import WinterCollections from "./Categories/WinterCollection";
import Toys from "./Categories/Toys";
import SignUp from "./SidebarComponents/Login.jsx";
import Profile from "./SidebarComponents/Profile.jsx";
import AboutUs from "./SidebarComponents/AboutUs.jsx";
import ContactUs from "./SidebarComponents/ContactUs.jsx";
import MyCart from "./SidebarComponents/MyCart.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Search from "./HeaderComponents/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Home/Clothing",
        element: <Clothing />,
      },
      {
        path: "/Home/Utensils",
        element: <Utensils />,
      },
      {
        path: "/Home/Luggage",
        element: <Luggage />,
      },
      {
        path: "/Home/Games",
        element: <Games />,
      },
      {
        path: "/Home/Furniture",
        element: <Furniture />,
      },
      {
        path: "/Home/Electronics",
        element: <Electronics />,
      },
      {
        path: "/Home/WinterCollections",
        element: <WinterCollections />,
      },
      {
        path: "/Home/Profile",
        element: <Profile />,
      },
      {
        path: "/Home/Toys",
        element: <Toys />,
      },
      {
        path: "/Home/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Home/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Home/MyCart",
        element: <MyCart />,
      },
      {
        path: "/Home/Search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
