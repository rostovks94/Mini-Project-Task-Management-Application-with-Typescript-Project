import React from 'react';
import { Task } from '../context/types';
import '../css/taskDetails.css';

interface TaskDetailsProps {
  task: Task;
  onClose: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onClose }) => {
  return (
    <div className="task-details">
      <div className="task-details-header">
        <h2>Task Details</h2>
        <button onClick={onClose} className="close-button">&times;</button>
      </div>
      <div className="task-details-body">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>
    </div>
  );
};

export default TaskDetails;