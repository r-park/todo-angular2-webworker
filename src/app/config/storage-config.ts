const baseUrl: string = 'http://localhost:8000';

export const strategy: string = 'local'; // local | server

export class StorageConfig {
  localStorageKey: string = 'TODO-APP';
  baseUrl: string = baseUrl;
  tasksUrl: string = `${baseUrl}/tasks`;
}
