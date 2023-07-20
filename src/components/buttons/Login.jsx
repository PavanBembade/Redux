import React, { useState } from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/actions/authActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === "example" && passWord === "password") {
      const userData = {
        userName: "example",
      };
      dispatch(loginSuccess(userData));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="cards">
            <form>
              <div className="mb-3">
                <label htmlFor="example1" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="example1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUserName(e.target.value)}
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
                  onChange={(e) => setPassWord(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                Submit
              </button>
              <div>
                <p className="text-center mt-2">
                  Don't have Account{" "}
                  <NavLink to="/register">
                    <span>Create account</span>
                  </NavLink>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
