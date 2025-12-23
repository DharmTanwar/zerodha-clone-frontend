import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
   e.preventDefault();;
    try {
      await axios.post("http://localhost:3002/login", User);
      window.location.replace("http://localhost:3001/");
    } catch (err) {
      console.log("something went wrong!");
      alert("Signup failed");
    }
  };
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-6 col-md-8 col-sm-11">
            <div className="card shadow-lg p-5 rounded-4">
              <h2
                className="text-center mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              >
                Login to Zerodha
              </h2>

              <form autoComplete="off" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-4">
                  <label
                    className="form-label"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={User.email}
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label
                    className="form-label"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Password
                  </label>
                  <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    value={User.password}
                    onChange={handleChange}
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-3"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Login
                </button>
              </form>

              <p
                className="text-center mt-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Don’t have an account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
