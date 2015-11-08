import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Tasks } from '../tasks/tasks';


@Component({
  selector: 'app'
})

@View({
  directives: <any>[
    RouterOutlet
  ],
  styleUrls: ['components/app/app.css'],
  templateUrl: 'components/app/app.html'
})

@RouteConfig([
  { path: '/', redirectTo: '/tasks' },
  { path: '/tasks', as: 'Tasks', component: Tasks }
])

export class App {}
