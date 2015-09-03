import { Injectable } from 'angular2/angular2';
import { Json } from 'angular2/src/facade/lang';
import { window } from 'angular2/src/facade/browser';
import { ITask, Task } from './task';


@Injectable()
export class TaskStore {
  tasks: ITask[];
  private storageKey: string;

  constructor() {
    this.storageKey = 'TODO-APP';
    this.tasks = Json.parse(window.localStorage.getItem(this.storageKey)) || [];
  }

  filter(fn: Function): ITask[] {
    return this.tasks.filter(fn);
  }

  createTask(title: string): void {
    this.tasks.unshift(new Task(title));
    this.save();
  }

  removeTask(task: ITask): void {
    const index: number = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    this.save();
  }

  updateTask(task: ITask): void {
    this.save();
  }

  private save(): void {
    window.localStorage.setItem(this.storageKey, Json.stringify(this.tasks));
  }
}
