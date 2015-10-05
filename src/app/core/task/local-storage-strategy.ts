import { ITask, Task } from './task';
import { ITaskService } from './task-service';


export class LocalStorageStrategy implements ITaskService {
  tasks: ITask[] = [];

  constructor() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = JSON.parse(localStorage.getItem('TODO-APP')) || [];
  }

  createTask(title: string): void {
    this.tasks.push(new Task(title));
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
    localStorage.setItem('TODO-APP', JSON.stringify(this.tasks));
  }
}
