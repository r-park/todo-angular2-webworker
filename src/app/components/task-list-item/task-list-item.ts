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
  selector: 'task-list-item'
})

@View({
  directives: [
    DefaultValueAccessor,
    NgControlName,
    NgFormModel
  ],
  encapsulation,
  styleUrls: ['app/components/task-list-item/task-list-item.css'],
  templateUrl: 'app/components/task-list-item/task-list-item.html'
})


export class TaskListItem {
  editing: boolean;
  form: ControlGroup;
  private _model: ITask;
  private taskService: TaskService;

  constructor(formBuilder: FormBuilder, taskService: TaskService) {
    this.editing = false;
    this.form = formBuilder.group({title: ['']});
    this.taskService = taskService;
  }

  get model(): ITask {
    return this._model;
  }

  set model(model: ITask) {
    this._model = model;
  }

  edit() {
    this.editing = true;
    this.form.controls.title.updateValue(this._model.title);
  }

  cancelEdit() {
    this.editing = false;
  }

  saveEdit() {
    if (this.editing) {
      const value: string = this.form.controls.title.value.trim();
      if (value.length && value !== this._model.title) {
        this._model.title = value;
        this.taskService.updateTask(this._model);
      }
      this.editing = false;
    }
  }

  remove() {
    this.taskService.deleteTask(this._model);
  }

  toggleStatus() {
    this._model.completed = !this._model.completed;
    this.taskService.updateTask(this._model);
  }
}
