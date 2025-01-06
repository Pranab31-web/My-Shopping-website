import { useDispatch, useSelector } from "react-redux";
import { MyCartActions } from "../store/MyCart";
function Toys() {
  const elem = useSelector((state) => state.Toys.elem);
  const dispatch = useDispatch();
  const AddingElemToCart = (e) => {
    dispatch(MyCartActions.addingElem(e));
  };
  return (
    <div id="grid" style={{ gridTemplateRows: "1fr 1fr 1fr", width: "70%" }}>
      {elem.map((e) => {
        return (
          <div id="elem">
            <div className="shadow-lg p-3 mb-5  rounded">
              <img src={`/${e.image}`} alt="image" />
              <center id="center">
                <h3>{e.Heading}</h3>
              </center>
              <h3 style={{ color: "white" }}>
                <b>{`${e.Price} $`}</b>
              </h3>
              <h3 style={{ color: "white" }}>{`Rating -  ${e.Rating}`}</h3>
              <button
                class="button"
                onClick={() => {
                  AddingElemToCart(e);
                }}
              >
                <div class="wrap">
                  <div class="state state--default">
                    <div class="icon-cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                      </svg>
                    </div>
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                    <p>
                      <span style={{ "--i": "0" }}>A</span>
                      <span style={{ "--i": "1" }}>d</span>
                      <span style={{ "--i": "2" }}>d</span>
                      <span style={{ "--i": "3" }}>t</span>
                      <span style={{ "--i": "4" }}>o</span>
                      <span style={{ "--i": " 5" }}>c</span>
                      <span style={{ "--i": "6" }}>a</span>
                      <span style={{ "--i": "7" }}>r</span>
                      <span style={{ "--i": "8" }}>t</span>
                    </p>
                  </div>
                  <div class="state state--added">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p>
                      <span style={{ "--i": "5" }}>A</span>
                      <span style={{ "--i": "6" }}>d</span>
                      <span style={{ "--i": "7" }}>d</span>
                      <span style={{ "--i": "8" }}>e</span>
                      <span style={{ "--i": "9" }}>d</span>
                    </p>
                  </div>
                </div>
                <div class="bg"></div>
                <div class="bg-spin"></div>
                <div class="bg-gradient"></div>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Toys;
