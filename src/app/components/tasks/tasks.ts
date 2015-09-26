import { Component, View } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { TaskForm } from '../task-form/task-form';
import { TaskList } from '../task-list/task-list';


@Component({
  selector: 'tasks'
})

@View({
  directives: [
    RouterLink,
    TaskForm,
    TaskList
  ],
  styleUrls: ['app/components/tasks/tasks.css'],
  templateUrl: 'app/components/tasks/tasks.html'
})


export class Tasks {}
