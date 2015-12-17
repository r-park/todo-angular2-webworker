import { platform } from 'angular2/core';
import { WORKER_APP_APPLICATION, WORKER_APP_PLATFORM } from 'angular2/platform/worker_app';
import { TASK_PROVIDERS } from './core/task/providers';
import { App } from './components/app/app';


platform([WORKER_APP_PLATFORM])
  .application([
    WORKER_APP_APPLICATION,
    TASK_PROVIDERS
  ])
  .bootstrap(App);
