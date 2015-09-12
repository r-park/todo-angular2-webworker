import { Injectable } from 'angular2/angular2';
import { Json } from 'angular2/src/core/facade/lang';
import { window } from 'angular2/src/core/facade/browser';
import { ITask, Task } from './task';


@Injectable()
export class LocalStorageStrategy {
  tasks: ITask[];

  constructor() {
    console.info('LocalStorageStrategy');
    this.tasks = [];
    this.getTasks();
  }

  getTasks() {
    this.tasks = Json.parse(window.localStorage.getItem('TODO-APP')) || [];
  }

  filterTasks(callback: (value: ITask, index: number, array: ITask[])=>boolean) {
    return this.tasks.filter(callback);
  }

  createTask(title: string) {
    this.tasks.push(new Task(title));
  }

  deleteTask(task: ITask) {
    const index: number = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    this.save();
  }

  updateTask(task: ITask) {
    this.save();
  }

  private save() {
    window.localStorage.setItem('TODO-APP', Json.stringify(this.tasks));
  }
}
