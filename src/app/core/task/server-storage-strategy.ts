import { Injectable } from 'angular2/angular2';
import { Http } from 'angular2/http';
import { ITask, Task } from './task';
import { ITaskService } from './task-service';


@Injectable()
export class ServerStorageStrategy implements ITaskService {
  tasks: ITask[];
  private http: Http;

  constructor(http: Http) {
    console.info('ServerStorageStrategy');
    this.http = http;
    this.tasks = [];
    this.getTasks();
  }

  getTasks() {
    this.http
      .get('http://localhost:8000/tasks')
      .toRx()
      .map(response => response.json())
      .subscribe(
        tasks => {
          console.log('getTasks:', tasks);
          this.tasks = tasks;
        },
        error => {
          console.error('getTasks:', error);
        });
  }

  filterTasks(callback: (value: ITask, index: number, array: ITask[]) => boolean) {
    return this.tasks.filter(callback);
  }

  createTask(title: string) {
    const task = new Task(title);
    this.http
      .post('http://localhost:8000/tasks', JSON.stringify(task))
      .toRx()
      .map(response => response.json())
      .subscribe(
        tasks => {
          console.log('createTask:', tasks);
          this.tasks.push(tasks);
        },
        error => {
          console.error('createTask:', error);
        });
  }

  deleteTask(task: ITask) {
    this.http
      .delete('http://localhost:8000' + task.links.self)
      .toRx()
      .subscribe(
        response => {
          console.log('deleteTask:', response);
          this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        error => {
          console.error('deleteTask:', error);
        });
  }

  updateTask(task: ITask) {
    this.http
      .put('http://localhost:8000' + task.links.self, JSON.stringify(task))
      .toRx()
      .subscribe(
        response => {
          console.log('updateTask:', response);
        },
        error => {
          console.error('updateTask:', error);
        });
  }

  filterActiveTasks(): ITask[] {
    return this.tasks.filter((task: ITask) => {
      return task.completed === false;
    });
  }

  filterCompletedTasks(): ITask[] {
    return this.tasks.filter((task: ITask) => {
      return task.completed;
    });
  }
}
