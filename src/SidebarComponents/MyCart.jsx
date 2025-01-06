import { useDispatch, useSelector } from "react-redux";
import { MyCartActions } from "../store/MyCart";
import { useEffect, useState } from "react";
import { LoginActions } from "../store/Login";

export default function MyCart() {
  const [finalPrice, EditPrice] = useState(0);
  const dispatch = useDispatch();
  const elem = useSelector((state) => state.MyCart.cart);
  const DeleteElemFromCart = (e) => {
    dispatch(MyCartActions.DeleteElem(e));
  };
  const ClearCart = async () => {
    setTimeout(() => {
      dispatch(MyCartActions.ClearCart());
    }, 2500);
  };
  useEffect(() => {
    EditPrice(0);
    elem.forEach((e) => {
      EditPrice((curr) => {
        return roundToNDecimals((curr += Number(e.Price)), 2);
      });
    });
  }, [elem]);

  function roundToNDecimals(number, n) {
    return Number(number.toFixed(n));
  }
  const PaymentDone = (list, money) => {
    dispatch(LoginActions.UpdatePurchasedElem(list, money));
  };

  return (
    <>
      {elem.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100% ",
          }}
          id="Cart"
        >
          <div>
            <center>
              <h1 style={{ color: "white" }}>
                <i>My Cart</i>
              </h1>
            </center>
            <hr style={{ color: "white" }} />
            <ol class="list-group list-group-numbered">
              {elem.map((e) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <li
                      style={{
                        color: "white",
                        background:
                          "linear-gradient(to left , black, rgb(114, 107, 107))",
                        boxShadow: "0px 0px 30px white",
                        borderRadius: "15px",
                      }}
                      id="li1"
                      class="list-group-item"
                    >
                      <p>{e.Heading}</p>
                      <p>{`Price - ${e.Price}`}</p>
                      <p>{`Rating - ${e.Rating}`}</p>
                    </li>

                    <button
                      type="button"
                      style={{
                        marginLeft: "10px",
                        boxShadow: "0px 0px 30px white",
                      }}
                      class="btn btn-outline-danger"
                      onClick={() => {
                        DeleteElemFromCart(e);
                      }}
                    >
                      Remove from Cart
                    </button>
                  </div>
                );
              })}
            </ol>
          </div>
          <div
            style={{
              flexGrow: "1",
              display: "flex",
              alignItems: "center",
              color: "white",
              flexDirection: "column",
            }}
          >
            <h3>Total price-</h3>
            {elem.map((e) => {
              return (
                <p
                  style={{ marginTop: "10px", marginBottom: "5px" }}
                >{`${e.Price} $`}</p>
              );
            })}
            <h5 style={{ marginTop: "10px" }}>Final price is {finalPrice} $</h5>
            <button
              class="button"
              style={{ marginLeft: "11%" }}
              onClick={() => {
                ClearCart();
                PaymentDone({ elem: elem, money: finalPrice });
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
                    <span style={{ "--i": "0" }}>P</span>
                    <span style={{ "--i": "1" }}>a</span>
                    <span style={{ "--i": "2" }}>y</span>
                    <span style={{ "--i": "3" }}></span>
                    <span style={{ "--i": "4" }}></span>
                    <span style={{ "--i": " 5" }}>N</span>
                    <span style={{ "--i": "6" }}>o</span>
                    <span style={{ "--i": "7" }}>w</span>
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
                    <span style={{ "--i": "5" }}>D</span>
                    <span style={{ "--i": "6" }}>o</span>
                    <span style={{ "--i": "7" }}>n</span>
                    <span style={{ "--i": "8" }}>e</span>
                  </p>
                </div>
              </div>
              <div class="bg"></div>
              <div class="bg-spin"></div>
              <div class="bg-gradient"></div>
            </button>
          </div>
        </div>
      ) : (
        <div id="EmpCart">
          <center>
            <h1 style={{ color: "white" }}>
              <i>My Cart</i>
            </h1>
          </center>
          <hr style={{ color: "white" }} />
          <h4 style={{ color: "white", marginTop: "30%" }}>
            There are no items in Your Cart
          </h4>
        </div>
      )}
    </>
  );
}
