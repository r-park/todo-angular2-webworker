import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { encapsulation } from 'app/utils/view-encapsulation';
import { Tasks } from '../tasks/tasks';


@Component({
  selector: 'app'
})

@View({
  directives: [
    RouterOutlet
  ],
  //encapsulation,
  styleUrls: ['app/components/app/app.css'],
  templateUrl: 'app/components/app/app.html'
})

@RouteConfig([
  { path: '/', redirectTo: '/tasks' },
  { path: '/tasks', as: 'tasks', component: Tasks }
])


export class App {}
