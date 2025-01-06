import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ResponsiveAction } from "../store/ResponsiveButton";

function Sidebar() {
  const dispatch = useDispatch();
  const ButtonClicked = () => {
    dispatch(ResponsiveAction.clicked());
  };
  const clicked = useSelector((state) => state.Responsive.clicked);
  const [id, changeid] = useState("sidebar");
  useEffect(() => {
    if (clicked) {
      changeid("sidebar1");
    } else {
      changeid("sidebar");
    }
  }, [clicked]);
  const Navigate = useNavigate();
  const elements = [
    {
      name: "Home",
    },
    {
      name: "Profile",
      url: "Profile",
    },
    { name: "My Cart", url: "MyCart" },
    { name: "Contact Us", url: "ContactUs" },
    { name: "About Us", url: "AboutUs" },
    { name: "Log Out" },
  ];
  return (
    <div id={id}>
      <ul
        className="shadow-lg p-3 mb-5 bg-body-primary rounded"
        style={{ boxShadow: "100px 0px 300px white" }}
        id="#ul2"
      >
        {elements.map((e) => {
          return (
            <li>
              <button
                className="Buttons"
                onClick={() => {
                  ButtonClicked();
                  if (e.name != "Log Out") {
                    e.name == "Home"
                      ? Navigate("/Home")
                      : Navigate(`/Home/${e.url}`);
                  } else {
                    Navigate("/");
                  }
                }}
              >
                <h5 style={{ marginTop: "8px" }}>{e.name}</h5>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
