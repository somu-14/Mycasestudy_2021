import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-toastify";
const Login = () => {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  let history = useHistory();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    try {
      const user = { username, password };
      axios.post("http://localhost:8080/login", user);
      console.log(user);
      alert("Login Success");
      history.push("/");
    } catch (error) {
      alert("Something went wrong");
    }
  };
  const handleClick = () => history.push("/");

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleForm} method="post">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="exampleInputUsername1"
                    aria-describedby="emailHelp"
                    name="username"
                    placeholder="username"
                    required="required"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
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
                    placeholder="Password"
                    required="required"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <Route to="/">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100 mt-5"
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </Route>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
