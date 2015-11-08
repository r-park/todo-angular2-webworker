import {
  Component,
  ControlGroup,
  DefaultValueAccessor,
  FormBuilder,
  NgControlName,
  NgFormModel,
  View
} from 'angular2/angular2';
import { TaskService } from 'core/task/task-service';


@Component({
  selector: 'task-form'
})

@View({
  directives: [
    DefaultValueAccessor,
    NgControlName,
    NgFormModel
  ],
  styleUrls: ['components/tasks/task-form/task-form.css'],
  templateUrl: 'components/tasks/task-form/task-form.html'
})

export class TaskForm {
  form: ControlGroup;
  private taskService: TaskService;

  constructor(formBuilder: FormBuilder, taskService: TaskService) {
    this.form = formBuilder.group({title: ['']});
    this.taskService = taskService;
  }

  cancel(): void {
    this.clear();
  }

  clear(): void {
    this.form.controls.title.updateValue('');
  }

  submit(): void {
    if (this.form.valid) {
      this.taskService.createTask(this.form.controls.title.value);
      this.clear();
    }
  }
}
