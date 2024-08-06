import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Register1 from './components/Register1';
import TaskForm from './components/TaskForm';
import Home from './components/Home';
import ResetPassword from './components/ResetPassword';
import TaskDetails from './components/TaskDetails';
import { TaskProvider } from './context/TaskContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { handleAuthCallback } from './utils/auth';
import './css/styles.css';

const App: React.FC = () => {
  const exampleTask = {
    id: '1',
    title: 'Example Task',
    description: 'This is an example task.',
    dueDate: '2024-12-31',
    completed: false,
  };

  useEffect(() => {
    handleAuthCallback();
  }, []);

  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/task-details" element={<TaskDetails task={exampleTask} onClose={() => console.log('Closed')} />} />
            <Route path="/register1" element={<Register1 />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/callback" element={<div>Loading...</div>} /> 
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;