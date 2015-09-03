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
import { TaskStore } from 'app/core/task/task-store';


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
  private store: TaskStore;

  constructor(formBuilder: FormBuilder, store: TaskStore) {
    this.form = formBuilder.group({title: ['']});
    this.store = store;
  }

  cancel(): void {
    this.form.controls.title.updateValue('');
  }

  submit(): void {
    if (this.form.valid) {
      this.store.createTask(this.form.controls.title.value);
      this.form.controls.title.updateValue('');
    }
  }
}
