import { ITask, Task } from './task';


export class TaskActions {
  constructor(private socket: any) {}

  createTask(title: string): void {
    this.socket.emit('createTask', new Task(title));
  }

  deleteTask(task: ITask): void {
    this.socket.emit('deleteTask', task);
  }

  updateTask(task: ITask, changes: any): void {
    this.socket.emit('updateTask', task, changes);
  }
}
