import {
  Component,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  Input,
  View
} from 'angular2/web_worker/worker';

import { ITask } from '../../../core/task/task';
import { TaskActions } from '../../../core/task/task-actions';


@Component({
  selector: 'task-item'
})

@View({
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],

  template: `
    <div [ng-class]="{'task-item--completed': model.completed, 'task-item--editing': editing}"
      class="task-item"
      tabindex="0">

      <div class="cell">
        <button *ng-if="!editing"
          (click)="toggleStatus()"
          aria-label="Mark task as completed"
          class="task-item__button"
          type="button">
          <span class="icon material-icons" [ng-class]="{'icon--active': model.completed}">done</span>
        </button>
      </div>

      <div class="cell">
        <div *ng-if="!editing"
          class="task-item__title"
          tabindex="0">
          {{ model.title }}
        </div>

        <form class="task-form" *ng-if="editing" (ng-submit)="saveTitle()" novalidate>
          <input
            (blur)="stopEditing()"
            (keyup.escape)="stopEditing()"
            ng-control="title"
            [(ng-model)]="title"
            autocomplete="off"
            autofocus
            class="task-item__input"
            type="text">
        </form>
      </div>

      <div class="cell">
        <button *ng-if="editing"
          (click)="stopEditing()"
          aria-label="Cancel editing"
          class="task-item__button"
          type="button">
          <span class="icon material-icons">&#xe14c;</span>
        </button>
        <button *ng-if="!editing"
          (click)="editTitle()"
          aria-label="Edit task title"
          class="task-item__button"
          type="button">
          <span class="icon material-icons">edit</span>
        </button>
        <button *ng-if="!editing"
          (click)="delete()"
          aria-label="Delete task"
          class="task-item__button"
          type="button">
          <span class="icon material-icons">delete</span>
        </button>
      </div>
    </div>
  `
})

export class TaskItem {
  @Input() model: ITask;

  editing: boolean = false;
  title: string = '';

  constructor(private taskActions: TaskActions) {}

  delete(): void {
    this.taskActions.deleteTask(this.model);
  }

  editTitle(): void {
    this.editing = true;
    this.title = this.model.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.model.title) {
        this.taskActions.updateTask(this.model, {title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.taskActions.updateTask(this.model, {
      completed: !this.model.completed
    });
  }
}
