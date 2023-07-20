import React, { useState } from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REGISTER_SUCCESS, registerSuccess } from "../../redux/actions/authRegisterAction";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [passWord, setPassWord] = useState("");
  const [conPassWord, setConPassWord] = useState("");

  const validateEmail = (email) => {
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setPasswordMatch(true);
    setEmailFormatError(false);

    // Check if passwords match
    if (passWord !== conPassWord) {
      setPasswordMatch(false);
      // const registerData = {
      //   username: formData.username,
      //   email: formData.email,
      //   birthdate: formData.birthdate,
      //   password: formData.password,
      // };
      // dispatch(registerSuccess(registerData));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          username: userName,
          email: email,
          birthdate: birthDate,
          password: passWord,
        },
      });
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setEmailFormatError(true);
      return;
    }

    //   const registerData={
    //     username: formData.username,
    //     email: formData.email,
    //     birthdate: formData.birthdate,
    //     password: formData.password,
    // }
    // Dispatch the registration action with the registration data
    // dispatch(registerSuccess(registerData));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="cards">
            <form>
              <div className="mb-2">
                <label for="exampleInputPassword2" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword2"
                  // onChange={handleInputChange}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailFormatError && (
                  <p className="error-message">Invalid email format.</p>
                )}
              </div>
              <div className="mb-2">
                <label for="exampleInputPassword3" className="form-label">
                  Birthdate
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword3"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassWord(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputPassword4" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword4"
                  onChange={(e) => setConPassWord(e.target.value)}
                />
                {!passwordMatch && (
                  <p className="error-message">Passwords do not match!</p>
                )}
              </div>
              <div className="mb-2 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-4 w-100 mx-auto"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <div>
                <p className="text-center">
                  Don't have Account{" "}
                  <NavLink to="/login">
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

export default Signup;
