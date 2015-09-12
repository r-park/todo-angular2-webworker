import {
  Component,
  ControlGroup,
  DefaultValueAccessor,
  FormBuilder,
  NgControlName,
  NgFormModel,
  View
} from 'angular2/angular2';
import { encapsulation } from 'app/utils/view-encapsulation';
import { ITask } from 'app/core/task/task';
import { TaskService } from 'app/core/task/task-service';


@Component({
  properties: ['model'],
  selector: 'task-item'
})

@View({
  directives: [
    DefaultValueAccessor,
    NgControlName,
    NgFormModel
  ],
  encapsulation,
  styleUrls: ['app/components/task-item/task-item.css'],
  templateUrl: 'app/components/task-item/task-item.html'
})


export class TaskItem {
  editing: boolean;
  form: ControlGroup;
  model: ITask;
  private taskService: TaskService;

  constructor(formBuilder: FormBuilder, taskService: TaskService) {
    this.editing = false;
    this.form = formBuilder.group({title: ['']});
    this.taskService = taskService;
  }

  delete() {
    this.taskService.deleteTask(this.model);
  }

  edit() {
    this.editing = true;
    this.form.controls.title.updateValue(this.model.title);
  }

  cancelEdit() {
    this.editing = false;
  }

  saveEdit() {
    if (this.editing) {
      const value: string = this.form.controls.title.value.trim();
      if (value.length && value !== this.model.title) {
        this.model.title = value;
        this.taskService.updateTask(this.model);
      }
      this.editing = false;
    }
  }

  toggleStatus() {
    this.model.completed = !this.model.completed;
    this.taskService.updateTask(this.model);
  }
}
