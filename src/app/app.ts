import { bind, bootstrap, FORM_BINDINGS } from 'angular2/angular2';
import { HashLocationStrategy, LocationStrategy, ROUTER_BINDINGS } from 'angular2/router';
import { TaskStore } from 'app/core/task/task-store';
import { App } from 'app/components/app/app';


bootstrap(App, [
  FORM_BINDINGS,
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy),
  TaskStore
]);
