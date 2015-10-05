import { ITask } from './task';


export interface ITaskService {
  tasks: ITask[];
  loadTasks(): void;
  createTask(title: string): void;
  deleteTask(task: ITask): void;
  updateTask(task: ITask): void;
}


export abstract class TaskService implements ITaskService {
  tasks: ITask[];
  abstract loadTasks(): void;
  abstract createTask(title: string): void;
  abstract deleteTask(task: ITask): void;
  abstract updateTask(task: ITask): void;
}
