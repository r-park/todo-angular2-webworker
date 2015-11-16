import { Component, View } from 'angular2/web_worker/worker';
import { TaskStore} from '../../core/task/task-store';
import { TaskForm } from './task-form/task-form';
import { TaskItem } from './task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


@Component({
  selector: 'tasks'
})

@View({
  directives: [
    TaskForm,
    TaskItem
  ],

  pipes: [
    TaskListFilterPipe
  ],

  template: `
    <div class="g-row">
      <div class="g-col">
        <task-form></task-form>
      </div>

      <div class="g-col">
        <ul class="task-filters">
          <li><a [class.active]="!filterType" (click)="filter()" href="javascript:">View All</a></li>
          <li><a [class.active]="filterType == 'active'" (click)="filter('active')" href="javascript:">Active</a></li>
          <li><a [class.active]="filterType == 'completed'" (click)="filter('completed')" href="javascript:">Completed</a></li>
        </ul>
      </div>

      <div class="g-col">
        <div class="task-list">
          <task-item [model]="task" *ng-for="#task of taskStore.tasks | async | filterTasks:filterType"></task-item>
        </div>
      </div>
    </div>
  `
})

export class Tasks {
  filterType: string;

  constructor(public taskStore: TaskStore) {}

  filter(type: string = null): void {
    this.filterType = type;
  }
}
