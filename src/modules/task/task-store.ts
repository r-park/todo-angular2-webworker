import { EventEmitter, NgZone } from 'angular2/core';
import { List } from 'immutable';
import { ITask } from './task';


export class TaskStore {
  list: List<any>;
  tasks: EventEmitter<any> = new EventEmitter();

  constructor(private socket: any, private zone: NgZone) {
    socket.on('created', this.created.bind(this));
    socket.on('deleted', this.deleted.bind(this));
    socket.on('updated', this.updated.bind(this));

    socket.on('loaded', (tasks: ITask[]) => {
      this.list = List(tasks);
      this.emit();
    });

    socket.emit('loadTasks');
  }

  private emit(): void {
    this.zone.run(() => this.tasks.emit(this.list));
  }

  private created(task: ITask): void {
    let index: number = this.findIndex(task.id);
    if (index === -1) {
      this.list = this.list.push(task);
      this.emit();
    }
  }

  private deleted(task: ITask): void {
    let index: number = this.findIndex(task.id);
    if (index !== -1) {
      this.list = this.list.delete(index);
      this.emit();
    }
  }

  private updated(task: ITask): void {
    let index: number = this.findIndex(task.id);
    if (index !== -1) {
      this.list = this.list.set(index, task);
      this.emit();
    }
  }

  private findIndex(id: string): number {
    return this.list.findIndex((task: ITask) => {
      return task.id === id;
    });
  }
}
