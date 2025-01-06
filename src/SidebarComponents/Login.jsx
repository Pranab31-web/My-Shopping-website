import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import { useDispatch } from "react-redux";
import { LoginActions } from "../store/Login";

function SignUp() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add("body1");
    return () => {
      document.body.classList.remove("body1");
    };
  }, []);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    dispatch(LoginActions.UpdateValues(formEntries));
    Navigate("/Home");
  };
  const Email = useRef("");
  const Password = useRef("");
  const Name = useRef("");
  const Username = useRef("");

  return (
    <div id="Signup">
      <center>
        <h2>Sign Up</h2>
      </center>
      <hr />
      <form
        method="Post"
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Your name
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            ref={Name}
          />
          <div id="emailHelp" className="form-text" style={{ color: "white" }}>
            We'll never share your personal details with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="username"
            ref={Username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            ref={Email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            ref={Password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignUp;
