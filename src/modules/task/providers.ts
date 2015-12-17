import { NgZone, provide } from 'angular2/core';
import * as io from 'socket.io-client';
import { TaskActions } from './task-actions';
import { TaskStore } from './task-store';


export const TASK_PROVIDERS: any[] = [
  provide(TaskActions, {
    useFactory: (): TaskActions => {
      return new TaskActions(io.connect('http://localhost:3002'));
    }
  }),

  provide(TaskStore, {
    deps: [NgZone],
    useFactory: (zone: NgZone): TaskStore => {
      return new TaskStore(io.connect('http://localhost:3002'), zone);
    }
  })
];
