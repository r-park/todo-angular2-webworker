import { Injectable } from 'angular2/angular2';
import { ITask } from './task';


export class TaskService {
  tasks: ITask[];

  getTasks() {
    throw new Error('This method is abstract');
  }

  filterTasks(callback: (value: ITask, index: number, array: ITask[])=>boolean) {
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
