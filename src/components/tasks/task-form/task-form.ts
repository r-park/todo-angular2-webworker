import { Component, FORM_DIRECTIVES, View } from 'angular2/web_worker/worker';
import { TaskActions } from '../../../core/task/task-actions';


@Component({
  selector: 'task-form'
})

@View({
  directives: [
    FORM_DIRECTIVES
  ],

  template: `
    <input
      (keyup.enter)="submit()"
      (keyup.escape)="clear()"
      [(ng-model)]="title"
      autocomplete="off"
      autofocus
      class="task-form__input"
      placeholder="What needs to be done?"
      required
      type="text">
  `
})

export class TaskForm {
  title: string;

  constructor(private taskActions: TaskActions) {}

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title = this.title.trim();
    if (title.length) {
      this.taskActions.createTask(title);
    }
    this.clear();
  }
}
