import { TaskState, TaskAction } from './types';

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.task] };
    case 'COMPLETE_TASK':
      const taskToComplete = state.tasks.find(task => task.id === action.id);
      if (taskToComplete) {
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.id),
          completedTasks: [...state.completedTasks, { ...taskToComplete, completed: true }]
        };
      }
      return state;
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
        completedTasks: state.completedTasks.filter(task => task.id !== action.id)
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.task.id ? action.task : task)
      };
    default:
      return state;
  }
};

export default taskReducer;