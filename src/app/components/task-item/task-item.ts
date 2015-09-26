import {
  Component,
  ControlGroup,
  DefaultValueAccessor,
  FormBuilder,
  NgClass,
  NgControlName,
  NgFormModel,
  View
} from 'angular2/angular2';
import { ITask } from 'app/core/task/task';
import { TaskService } from 'app/core/task/task-service';
import { FocusDirective } from 'app/directives/focus-directive';


@Component({
  properties: ['model'],
  selector: 'task-item'
})

@View({
  directives: [
    DefaultValueAccessor,
    FocusDirective,
    NgClass,
    NgControlName,
    NgFormModel
  ],
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
