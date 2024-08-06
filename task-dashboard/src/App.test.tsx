import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
};

export default App;
