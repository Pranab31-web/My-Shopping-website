import { useSelector } from "react-redux";
import Header from "./HeaderComponents/Header";
import Sidebar from "./SidebarComponents/Sidebar";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
function App() {
  const clicked = useSelector((state) => state.Responsive.clicked);
  const [id, changeid] = useState("Outlet1");
  useEffect(() => {
    if (clicked) {
      changeid("Outlet");
    } else {
      changeid("Outlet1");
    }
  }, [clicked]);
  return (
    <>
      <Header />
      <div id="flexing">
        <Sidebar />
        <div id={id}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default App;
