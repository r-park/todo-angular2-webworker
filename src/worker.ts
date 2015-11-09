import { bootstrapWebWorker } from 'angular2/web_worker/worker';
import { TASK_PROVIDERS } from 'core/task/providers';
import { App } from 'components/app/app';


bootstrapWebWorker(App, [
  TASK_PROVIDERS
]).catch((error: Error) => console.error('ERROR @ worker :', error));
