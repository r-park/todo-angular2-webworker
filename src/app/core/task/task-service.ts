import { Injectable } from 'angular2/angular2';
import { ITask } from './task';


export interface ITaskService {
  tasks: ITask[];
  getTasks();
  filterTasks(callback: (value: ITask, index: number, array: ITask[]) => boolean): ITask[];
  createTask(title: string);
  deleteTask(task: ITask);
  updateTask(task: ITask);
}


@Injectable()
export class TaskService implements ITaskService {
  tasks: ITask[];

  getTasks() {
    throw new Error('This method is abstract');
  }

  filterTasks(callback: (value: ITask, index: number, array: ITask[]) => boolean): ITask[] {
    throw new Error('This method is abstract');
  }

  createTask(title: string) {
    throw new Error('This method is abstract');
  }

  deleteTask(task: ITask) {
    throw new Error('This method is abstract');
  }

  updateTask(task: ITask) {
    throw new Error('This method is abstract');
  }
}
