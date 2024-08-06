import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Home: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <span className="easy-monday">EASY MONDAY</span>
          <img src="/images/easymonday.png" alt="Icon" className="icon" />
          <span className="task-manager">task manager</span>
        </Link>
      </nav>

      <div className="jumbotron text-center">
        <h1 className="display-4">WORK SMARTER WITH EASY MONDAY TASK MANAGER</h1>
        <p className="lead">Your ultimate tool for planning, managing, and tracking all your tasks in one intuitive platform.</p>
        <div className="btn-container">
          <Link to="/login" className="btn-account">Go to my account</Link> {/* Изменен путь */}
          <Link to="/register" className="btn-register">Register</Link>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">Automate Your Tasks</h5>
                <p className="card-text">Streamline your workflow by automating repetitive tasks, saving you time and effort.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">Collaborate Effectively</h5>
                <p className="card-text">Enhance team collaboration with real-time updates, comments, and file sharing.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">Track Progress Easily</h5>
                <p className="card-text">Monitor task progress with intuitive dashboards and keep your projects on track.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer mt-5">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </footer>
    </div>
  );
};

export default Home;