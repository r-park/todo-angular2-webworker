export interface ITask {
  completed: boolean;
  title: string;
}


export class Task implements ITask {
  completed: boolean;
  title: string;

  constructor(title: string = '') {
    this.completed = false;
    this.title = title;
  }
}
