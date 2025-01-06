import { Link } from "react-router";

function Home() {
  const elem = [
    "Utensils",
    "Luggage",
    "Games",
    "Clothing",
    "Furniture",
    "Electronics",
    "WinterCollections",
    "Toys",
  ];
  return (
    <div id="grid">
      {elem.map((e) => {
        return (
          <div id="elem">
            <div className="shadow-lg p-3 mb-5  rounded">
              <Link to={`/Home/${e}`}>
                <img src={`${e}.png`} alt="" />
              </Link>
              <center id="center">
                <h3>{e}</h3>
              </center>
              <center>
                <Link to={`/Home/${e}`} class="link-info">
                  Shop Now
                </Link>
              </center>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
