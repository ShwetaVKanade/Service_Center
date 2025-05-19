import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = {
      email: "urvashi@gmail.com",
      password: "12345",
    };

    if (!email || !password) {
      setErrorMessage("Email and Password are required.");
      return;
    }

    if (email === validUser.email && password === validUser.password) {
      localStorage.setItem("userEmail", email);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>

          {errorMessage && (
            <p className="text-danger text-center mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
