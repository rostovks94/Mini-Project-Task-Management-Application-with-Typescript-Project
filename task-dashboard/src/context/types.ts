export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
  completedTasks: Task[];
}

export type TaskAction = 
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'COMPLETE_TASK'; id: string }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'EDIT_TASK'; task: Task };

export {};