import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Signup() {
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
  }, []);

  const handleChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/Signup", User);
      window.location.replace("http://localhost:3001/");
    } catch (error) {
      console.log("Signup failed", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-6 col-md-8 col-sm-11">
          <div className="card shadow-lg p-5 rounded-4">
            <h2
              className="text-center mb-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
            >
              Create Account
            </h2>

            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-4">
                <label className="form-label">Username</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="username"
                  value={User.username}
                  className="form-control form-control-lg rounded-3"
                  placeholder="Enter your username"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  value={User.email}
                  onChange={handleChange}
                  className="form-control form-control-lg rounded-3"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
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
              >
                Sign Up
              </button>
            </form>

            <p className="text-center mt-4">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
