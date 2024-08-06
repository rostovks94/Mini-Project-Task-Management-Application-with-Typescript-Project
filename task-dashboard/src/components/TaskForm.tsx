import React from 'react';
import '../css/register1.css';

const TaskForm: React.FC = () => {
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
        <h2>Create your account</h2>
        <form id="registerForm">
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input type="text" id="fullName" className="form-control" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter at least 8 characters" required />
          </div>
          <div className="form-group">
            <label htmlFor="accountName">Account name (optional)</label>
            <input type="text" id="accountName" className="form-control" placeholder="For example, company's or department's name" />
          </div>
          <button type="submit" className="btn-continue">Continue</button>
        </form>
      </div>
      <div className="orange-panel"></div>
    </div>
  );
};

export default TaskForm;
