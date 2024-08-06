import React from 'react';
import { Link } from 'react-router-dom'; 
import { login } from '../utils/auth';
import '../css/login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <a className="navbar-brand" href="index.html">
          <span className="easy-monday">EASY MONDAY</span>
          <img src="images/easymonday.png" alt="Icon" className="icon" />
          <span className="task-manager">task manager</span>
        </a>
      </div>
      <div className="login-form">
        <h2>Log in to your account</h2>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label htmlFor="email">Enter your email address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="name@company.com" required />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter your password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" required />
            <div className="invalid-feedback">
              Please enter your password.
            </div>
          </div>
          <button type="submit" className="btn btn-next" onClick={login}>Next</button>
        </form>
        <hr />
        <button className="google-login" onClick={login}>
          <img src="images/google.png" alt="Google Icon" />
          Sign in with Google
        </button>
        <p>Don't have an account yet? <Link to="/register" className="orange-link">Sign up</Link></p>
        <p>Can't log in? <a href="#" className="orange-link">Visit our help center</a></p>
      </div>
      <div className="orange-panel"></div>
    </div>
  );
};

export default Login;