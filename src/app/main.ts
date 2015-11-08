import { bootstrap, provide } from 'angular2/angular2';
import { HTTP_PROVIDERS } from 'angular2/http';
import { HashLocationStrategy, LocationStrategy, ROUTER_PROVIDERS } from 'angular2/router';
import { TASK_BINDINGS } from 'app/core/task/bindings';
import { App } from 'app/components/app/app';


bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  TASK_BINDINGS
]).catch((err: Error) => console.error(err));
