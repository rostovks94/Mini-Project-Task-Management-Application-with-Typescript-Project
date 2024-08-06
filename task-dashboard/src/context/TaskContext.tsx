import React, { createContext, useReducer, ReactNode } from 'react';

interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    completedTasks: Task[];
}


type TaskAction = 
    | { type: 'ADD_TASK'; task: Task }
    | { type: 'COMPLETE_TASK'; id: string }
    | { type: 'DELETE_TASK'; id: string }
    | { type: 'EDIT_TASK'; task: Task };

const initialState: TaskState = {
    tasks: [],
    completedTasks: []
};

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

interface TaskContextProps {
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext };