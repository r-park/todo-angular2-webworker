import { Injectable } from 'angular2/angular2';


export interface ITask {
  completed: boolean;
  id?: string;
  links?: { self: string };
  title: string;
}


@Injectable()
export class Task implements ITask {
  completed: boolean;
  title: string;

  constructor(title: string = '') {
    this.completed = false;
    this.title = title;
  }
}
