import React from "react";
import "../Css/login.css";
function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-options">
          <h3>login</h3>
          <h3>Register</h3>
        </div>
        <div className="form-container">
          <div className="form-input">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="name" className="form-label">
              <span className="content-name">Name</span>
            </label>
          </div>
          <div className="form-input">
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
            />
            <label htmlFor="password" className="form-label">
              <span className="content-password">Password</span>
            </label>
          </div>
          <div className="form-input">
            <input type="eamil" name="email" autoComplete="off" required />
            <label htmlFor="email" className="form-label">
              <span className="content-email">Email</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
