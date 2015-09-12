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
import { TaskService } from 'app/core/task/task-service';


@Component({
  selector: 'task-form'
})

@View({
  directives: [
    DefaultValueAccessor,
    NgControlName,
    NgFormModel
  ],
  encapsulation,
  styleUrls: ['app/components/task-form/task-form.css'],
  templateUrl: 'app/components/task-form/task-form.html'
})


export class TaskForm {
  form: ControlGroup;
  private taskService: TaskService;

  constructor(formBuilder: FormBuilder, taskService: TaskService) {
    this.form = formBuilder.group({title: ['']});
    this.taskService = taskService;
  }

  cancel() {
    this.clear();
  }

  clear() {
    this.form.controls.title.updateValue('');
  }

  submit() {
    if (this.form.valid) {
      this.taskService.createTask(this.form.controls.title.value);
      this.clear();
    }
  }
}
