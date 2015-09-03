import { Component, NgFor, View } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { encapsulation } from 'app/utils/view-encapsulation';
import { ITask } from 'app/core/task/task';
import { TaskStore } from 'app/core/task/task-store';
import { TaskListItem } from '../task-list-item/task-list-item';


@Component({
  selector: 'task-list'
})

@View({
  directives: [
    NgFor,
    TaskListItem
  ],
  encapsulation,
  styleUrls: ['app/components/task-list/task-list.css'],
  templateUrl: 'app/components/task-list/task-list.html'
})


export class TaskList {
  private status: string;
  private store: TaskStore;

  constructor(params: RouteParams, store: TaskStore) {
    this.status = params.params ? params.get('status') : '';
    this.store = store;
  }

  get tasks(): ITask[] {
    if (this.status === 'active') {
      return this.activeTasks();
    }
    else if (this.status === 'completed') {
      return this.completedTasks();
    }
    return this.store.tasks;
  }

  private activeTasks(): ITask[] {
    return this.store.filter((task: ITask) => {
      return task.completed === false;
    });
  }

  private completedTasks(): ITask[] {
    return this.store.filter((task: ITask) => {
      return task.completed === true;
    });
  }
}
