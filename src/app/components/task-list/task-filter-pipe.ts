import { Pipe, PipeTransform } from 'angular2/angular2';
import { ITask } from 'app/core/task/task';


@Pipe({
  name: 'filterTasks'
})

export class TaskFilterPipe implements PipeTransform {
  transform(list: ITask[], args: any[] = null): ITask[] {
    let filter = args[0];

    if (!filter) {
      return list;
    }

    if (filter === 'active') {
      filter = false;
    }
    else if (filter === 'completed') {
      filter = true;
    }

    return list.filter((task: ITask) => {
      return task.completed === filter;
    });
  }
}
