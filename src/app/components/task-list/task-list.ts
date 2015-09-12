import { Component, NgFor, View } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { encapsulation } from 'app/utils/view-encapsulation';
import { ITask } from 'app/core/task/task';
import { TaskService } from 'app/core/task/task-service';
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
  private taskService: TaskService;

  constructor(params: RouteParams, taskService: TaskService) {
    this.status = params.params ? params.get('status') : ''; // issue: params.params is null
    this.taskService = taskService;
  }

  get tasks(): ITask[] {
    if (this.status === 'active') {
      return this.activeTasks();
    }
    else if (this.status === 'completed') {
      return this.completedTasks();
    }
    return this.taskService.tasks;
  }

  private activeTasks(): ITask[] {
    return this.taskService.filterTasks((task: ITask) => {
      return task.completed === false;
    });
  }

  private completedTasks(): ITask[] {
    return this.taskService.filterTasks((task: ITask) => {
      return task.completed === true;
    });
  }
}
