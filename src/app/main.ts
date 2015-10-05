import { bind, bootstrap, FORM_BINDINGS } from 'angular2/angular2';
import { HTTP_BINDINGS } from 'angular2/http';
import { HashLocationStrategy, LocationStrategy, routerBindings } from 'angular2/router';
import { TASK_BINDINGS } from 'app/core/task/bindings';
import { App } from 'app/components/app/app';


bootstrap(App, [
  routerBindings(App),
  bind(LocationStrategy).toClass(HashLocationStrategy),
  FORM_BINDINGS,
  HTTP_BINDINGS,
  TASK_BINDINGS
]).catch((err: Error) => console.error(err));
