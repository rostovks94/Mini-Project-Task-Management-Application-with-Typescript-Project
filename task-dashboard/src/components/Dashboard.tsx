import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import '../css/dashboard.css';

const Dashboard: React.FC = () => {
  const context = useContext(TaskContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');

  if (!context) {
    return <div>Loading...</div>;
  }

  const { state, dispatch } = context;
  const { tasks, completedTasks } = state;

  const addTask = (title: string, description: string, dueDate: string) => {
    dispatch({ type: 'ADD_TASK', task: { id: Date.now().toString(), title, description, dueDate, completed: false } });
  };

  const completeTask = (id: string) => {
    dispatch({ type: 'COMPLETE_TASK', id });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  return (
    <div className="dashboard-container">
      <div className="logo">
        <Link className="navbar-brand" to="/">
          <span className="easy-monday">EASY MONDAY</span>
          <img src="/images/easymonday.png" alt="Icon" className="icon" />
          <span className="task-manager">task manager</span>
        </Link>
      </div>
      <div className="container mt-5">
        <h1 className="text-center">Task Dashboard</h1>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <button className="btn btn-primary mr-2" data-toggle="modal" data-target="#taskModal">New Task</button>
        </div>
        <div className="accordion" id="taskAccordion">
          <div className="card">
            <div className="card-header" id="headingAll">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseAll" aria-expanded="true" aria-controls="collapseAll">
                  All Tasks
                </button>
              </h2>
            </div>
            <div id="collapseAll" className="collapse show" aria-labelledby="headingAll" data-parent="#taskAccordion">
              <div className="card-body">
                <div className="row" id="taskList">
                  {tasks.map((task, index) => (
                    <div className="col-sm-4" key={index}>
                      <div className={`card ${task.completed ? 'card-completed' : ''}`}>
                        <div className="card-body">
                          <h5 className="card-title">{task.title} <span className={`badge ${task.completed ? 'badge-secondary' : 'badge-primary'}`}>{task.completed ? 'Completed' : 'Active'}</span></h5>
                          <p className="card-text">{task.description}</p>
                          <p className="card-text"><small className="text-muted">Due date: {task.dueDate}</small></p>
                          <button className="btn btn-primary" onClick={() => completeTask(task.id)}>Complete</button>
                          <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {completedTasks.map((task, index) => (
                    <div className="col-sm-4" key={index + tasks.length}>
                      <div className={`card ${task.completed ? 'card-completed' : ''}`}>
                        <div className="card-body">
                          <h5 className="card-title">{task.title} <span className={`badge ${task.completed ? 'badge-secondary' : 'badge-primary'}`}>{task.completed ? 'Completed' : 'Active'}</span></h5>
                          <p className="card-text">{task.description}</p>
                          <p className="card-text"><small className="text-muted">Due date: {task.dueDate}</small></p>
                          <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="taskModal" tabIndex={-1} role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="taskModalLabel">Task Details</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  addTask(taskTitle, taskDescription, taskDueDate);
                }}>
                  <div className="form-group">
                    <label htmlFor="taskTitle">Title</label>
                    <input type="text" className="form-control" id="taskTitle" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} required placeholder="Enter task title" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="taskDescription">Description</label>
                    <textarea className="form-control" id="taskDescription" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} rows={3} required placeholder="Enter task description" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="taskDueDate">Due Date</label>
                    <input type="date" className="form-control" id="taskDueDate" value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-primary">Save Task</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;