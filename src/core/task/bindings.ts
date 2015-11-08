import { bind } from 'angular2/angular2';
import { StorageConfig, strategy } from 'config/storage-config';
import { LocalStorageStrategy } from './local-storage-strategy';
import { ServerStorageStrategy } from './server-storage-strategy';
import { Task } from './task';
import { TaskService } from './task-service';


export const TASK_BINDINGS: Array<any> = [
  StorageConfig,
  Task,
  bind(TaskService).toClass(
    strategy === 'server' ? ServerStorageStrategy : LocalStorageStrategy
  )
];
