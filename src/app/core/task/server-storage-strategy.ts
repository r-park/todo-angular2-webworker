import { Injectable } from 'angular2/angular2';
import { Http, Response } from 'angular2/http';
import { StorageConfig } from 'app/config/storage-config';
import { ITask, Task } from './task';
import { ITaskService } from './task-service';


@Injectable()
export class ServerStorageStrategy implements ITaskService {
  baseUrl: string;
  tasksUrl: string;
  tasks: ITask[] = [];

  constructor(private http: Http, config: StorageConfig) {
    this.baseUrl = config.baseUrl;
    this.tasksUrl = config.tasksUrl;
    this.loadTasks();
  }

  loadTasks(): void {
    this.http
      .get(this.tasksUrl)
      .map((res: Response) => res.json())
      .subscribe(
        (tasks: ITask[]) => this.tasks = tasks,
        (error: Error) => console.error('loadTasks:', error)
      );
  }

  createTask(title: string): void {
    this.http
      .post(this.tasksUrl, JSON.stringify(new Task(title)))
      .map((res: Response) => res.json())
      .subscribe(
        (task: ITask) => this.tasks.push(task),
        (error: Error) => console.error('loadTasks:', error)
      );
  }

  deleteTask(task: ITask): void {
    this.http
      .delete(this.baseUrl + task.links.self)
      .subscribe(
        (res: Response) => this.tasks.splice(this.tasks.indexOf(task), 1),
        (error: Error) => console.error('deleteTask:', error)
      );
  }

  updateTask(task: ITask): void {
    this.http
      .put(this.baseUrl + task.links.self, JSON.stringify(task))
      .map((res: Response) => res.json())
      .subscribe(
        (res: Response) => console.log('updateTask:', res),
        (error: Error) => console.error('updateTask:', error)
      );
  }
}
