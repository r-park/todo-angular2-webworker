import { bind, bootstrap, FORM_BINDINGS } from 'angular2/angular2';
import { HTTP_BINDINGS } from 'angular2/http';
import { HashLocationStrategy, LocationStrategy, ROUTER_BINDINGS } from 'angular2/router';
import { LocalStorageStrategy } from 'app/core/task/local-storage-strategy';
import { ServerStorageStrategy } from 'app/core/task/server-storage-strategy';
import { TaskService } from 'app/core/task/task-service';
import { App } from 'app/components/app/app';


bootstrap(App, [
  FORM_BINDINGS,
  HTTP_BINDINGS,
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy),
  bind(TaskService).toClass(LocalStorageStrategy)
]);
