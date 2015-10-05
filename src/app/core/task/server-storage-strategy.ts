import { Injectable } from 'angular2/angular2';
import { Http, Response } from 'angular2/http';
import { ITask, Task } from './task';
import { ITaskService } from './task-service';


@Injectable()
export class ServerStorageStrategy implements ITaskService {
  tasks: ITask[] = [];

  constructor(private http: Http) {
    this.loadTasks();
  }

  loadTasks(): void {
    this.http
      .get('http://localhost:8000/tasks')
      .map((res: Response) => res.json())
      .subscribe(
        (tasks: ITask[]) => {
          console.log('loadTasks:', tasks);
          this.tasks = tasks;
        },
        (error: Error) => console.error('loadTasks:', error)
      );
  }

  createTask(title: string): void {
    this.http
      .post('http://localhost:8000/tasks', JSON.stringify(new Task(title)))
      .map((res: Response) => res.json())
      .subscribe(
        (task: ITask) => {
          console.log('createTask:', task);
          this.tasks.push(task);
        },
        (error: Error) => console.error('loadTasks:', error)
      );
  }

  deleteTask(task: ITask): void {
    this.http
      .delete(`http://localhost:8000${task.links.self}`)
      .subscribe(
        (res: Response) => {
          console.log('deleteTask:', res);
          this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        (error: Error) => console.error('deleteTask:', error)
      );
  }

  updateTask(task: ITask): void {
    this.http
      .put(`http://localhost:8000${task.links.self}`, JSON.stringify(task))
      .map((res: Response) => res.json())
      .subscribe(
        (res: Response) => console.log('updateTask:', res),
        (error: Error) => console.error('updateTask:', error)
      );
  }
}
