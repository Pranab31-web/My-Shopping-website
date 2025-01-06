import { useSelector } from "react-redux";

export default function Profile() {
  const { name, email, username, amount, elemShop } = useSelector(
    (state) => state.Login
  );

  return (
    <>
      <div id="profile" style={{ marginLeft: "10px", color: "white" }}>
        <h1>Hey {name},</h1>
        <h5 style={{ marginTop: "20px" }}>Username - {username}</h5>
        <h5 style={{ marginTop: "20px" }}>Email - {email}</h5>
        <h5 style={{ marginTop: "20px" }}>
          {`You have till now done shopping of ${amount} $`}
        </h5>
        <h5 style={{ marginTop: "20px" }}>Items you have bought-</h5>
        <div>
          {elemShop.map((e) => {
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
                    padding: "15px",
                  }}
                  id="li1"
                  class="list-group-item"
                >
                  <p>{e.Heading}</p>
                  <p>{`Price - ${e.Price} $`}</p>
                  <p>{`Rating - ${e.Rating}`}</p>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
