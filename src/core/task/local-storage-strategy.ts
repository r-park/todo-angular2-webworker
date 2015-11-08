import { Injectable } from 'angular2/angular2';
import { StorageConfig } from 'config/storage-config';
import { ITask, Task } from './task';
import { ITaskService } from './task-service';


@Injectable()
export class LocalStorageStrategy implements ITaskService {
  storageKey: string;
  tasks: ITask[] = [];

  constructor(config: StorageConfig) {
    this.storageKey = config.localStorageKey;
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = JSON.parse(localStorage.getItem(this.storageKey)) || [];
  }

  createTask(title: string): void {
    this.tasks.push(new Task(title));
    this.save();
  }

  deleteTask(task: ITask): void {
    let index: number = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    this.save();
  }

  updateTask(task: ITask): void {
    this.save();
  }

  private save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }
}
