import { Component, View } from 'angular2/core';
import { Tasks } from '../tasks/tasks';


@Component({
  selector: 'app'
})

@View({
  directives: [
    Tasks
  ],

  template: `
    <header class="header">
      <div class="g-row">
        <div class="g-col">
          <h1 class="header__title">Todo Angular2 WebWorker</h1>
          <a class="header__link" href="https://github.com/r-park/todo-angular2-webworker"></a>
        </div>
      </div>
    </header>

    <main class="main">
      <tasks></tasks>
    </main>
  `
})

export class App {}
