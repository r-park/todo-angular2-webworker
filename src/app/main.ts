import { bind, bootstrap, FORM_BINDINGS } from 'angular2/angular2';
import { HTTP_BINDINGS } from 'angular2/http';
import { HashLocationStrategy, LocationStrategy, ROUTER_BINDINGS } from 'angular2/router';
import { TASK_BINDINGS } from 'app/core/task/bindings';
import { App } from 'app/components/app/app';


bootstrap(App, [
  FORM_BINDINGS,
  HTTP_BINDINGS,
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy),
  TASK_BINDINGS
]);
