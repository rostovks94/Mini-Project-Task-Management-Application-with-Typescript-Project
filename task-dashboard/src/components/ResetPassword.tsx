import React, { useState } from 'react';
import '../css/resetPassword.css'; 

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password for:', email);
  };

  return (
    <div className="reset-password-container">
      <div className="logo">
        <a className="navbar-brand" href="index.html">
          <span className="easy-monday">EASY MONDAY</span>
          <img src="images/easymonday.png" alt="Icon" className="icon" />
          <span className="task-manager">task manager</span>
        </a>
      </div>
      <div className="reset-password-form">
        <h2>Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            className="form-control" 
            placeholder="name@company.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" className="btn btn-continue">Reset Password</button>
        </form>
        <p className="login">Remember your password? <a href="login.html">Log in</a></p>
      </div>
      <div className="orange-panel"></div>
    </div>
  );
};

export default ResetPassword;