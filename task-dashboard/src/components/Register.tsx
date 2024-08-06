import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
import '../css/register.css';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/register1');
  };

  return (
    <div className="register-container">
      <div className="logo">
        <a className="navbar-brand" href="index.html">
          <span className="easy-monday">EASY MONDAY</span>
          <img src="images/easymonday.png" alt="Icon" className="icon" />
          <span className="task-manager">task manager</span>
        </a>
      </div>
      <div className="register-form">
        <h2>Welcome to Easy Monday</h2>
        <button className="btn btn-google" onClick={login}>
          <img src="images/google.png" alt="Google Logo" /> Continue with Google
        </button>
        <div className="divider">Or</div>
        <form id="register-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@company.com"
            required
          />
          <button type="submit" className="btn btn-continue">Continue</button>
        </form>
        <p className="terms">
          By proceeding, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </p>
        <p className="login">
          Already have an account? <a href="login.html">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;