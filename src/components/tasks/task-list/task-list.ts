import { Component, NgFor, View } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { ITask } from 'core/task/task';
import { TaskService } from 'core/task/task-service';
import { TaskItem } from '../task-item/task-item';
import { TaskFilterPipe } from './task-filter-pipe';


@Component({
  selector: 'task-list'
})

@View({
  directives: [
    NgFor,
    RouterLink,
    TaskItem
  ],
  pipes: [
    TaskFilterPipe
  ],
  styleUrls: ['components/tasks/task-list/task-list.css'],
  templateUrl: 'components/tasks/task-list/task-list.html'
})

export class TaskList {
  filter: string;
  private taskService: TaskService;

  constructor(params: RouteParams, taskService: TaskService) {
    this.filter = params.get('filter');
    this.taskService = taskService;
  }

  get tasks(): ITask[] {
    return this.taskService.tasks;
  }
}
