import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { SearchActions } from "../store/Search";
import { FiAlignJustify } from "react-icons/fi";
import { ResponsiveAction } from "../store/ResponsiveButton";

function Header() {
  const navigate = useNavigate();
  const SearchValue = useRef();
  const dispatch = useDispatch();
  const ChangeSValue = (val) => {
    dispatch(SearchActions.ChangeSearchValue(val));
  };
  const ButtonClicked = () => {
    dispatch(ResponsiveAction.clicked());
  };
  return (
    <nav
      className="navbar shadow-lg p-3 mb-5 bg-body-primary rounded"
      style={{
        position: "sticky",
        top: "0px",
        zIndex: "3",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.5)",
      }}
      id="Header"
    >
      <div className="container-fluid">
        <button id="icons" onClick={ButtonClicked}>
          <FiAlignJustify />
        </button>
        <a className="navbar-brand" id="Head">
          <Link to={"/Home"}>
            <h1>
              <b>
                <i style={{ fontSize: "50px" }}>My Shopping</i>
              </b>
            </h1>
          </Link>
        </a>
        <form
          className="d-flex"
          role="search"
          style={{ width: "60%", height: "50px" }}
          id="Search"
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={SearchValue}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (SearchValue.current.value != "") {
                ChangeSValue(SearchValue.current.value);
                navigate("/Home/Search");
              } else {
                navigate("/Home");
              }
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Header;
