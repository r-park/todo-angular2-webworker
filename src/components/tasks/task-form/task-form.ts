import { Component, View } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { TaskActions } from '../../../modules/task/task-actions';


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
      [(ngModel)]="title"
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
