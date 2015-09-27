import { Injectable } from 'angular2/angular2';
import { ITask } from './task';


export interface ITaskService {
  tasks: ITask[];
  getTasks();
  createTask(title: string);
  deleteTask(task: ITask);
  updateTask(task: ITask);
  filterActiveTasks(): ITask[];
  filterCompletedTasks(): ITask[];
}


@Injectable()
export abstract class TaskService implements ITaskService {
  tasks: ITask[];
  abstract getTasks();
  abstract createTask(title: string);
  abstract deleteTask(task: ITask);
  abstract updateTask(task: ITask);
  abstract filterActiveTasks(): ITask[];
  abstract filterCompletedTasks(): ITask[];
}
