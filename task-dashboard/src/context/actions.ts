import { Task } from './types';

export type TaskAction = 
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'COMPLETE_TASK'; id: string }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'EDIT_TASK'; task: Task };