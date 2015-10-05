import { Pipe, PipeTransform } from 'angular2/angular2';
import { ITask } from 'app/core/task/task';


@Pipe({
  name: 'filterTasks'
})

export class TaskFilterPipe implements PipeTransform {
  transform(list: ITask[], args: any[] = null): ITask[] {
    let filter: string = args[0];
    let completed: boolean = null;

    if (!filter) {
      return list;
    }

    if (filter === 'active') {
      completed = false;
    }
    else if (filter === 'completed') {
      completed = true;
    }

    return list.filter((task: ITask) => {
      return task.completed === completed;
    });
  }
}
