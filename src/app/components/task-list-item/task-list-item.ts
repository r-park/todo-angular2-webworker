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
import { TaskStore } from 'app/core/task/task-store';


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
  private store: TaskStore;

  constructor(formBuilder: FormBuilder, store: TaskStore) {
    this.editing = false;
    this.form = formBuilder.group({title: ['']});
    this.store = store;
  }

  get model(): ITask {
    return this._model;
  }

  set model(model: ITask) {
    this._model = model;
  }

  edit(): void {
    this.editing = true;
    this.form.controls.title.updateValue(this._model.title);
  }

  cancelEdit(): void {
    this.editing = false;
  }

  saveEdit(): void {
    if (this.editing) {
      const value: string = this.form.controls.title.value.trim();
      if (value.length && value !== this._model.title) {
        this._model.title = value;
        this.store.updateTask(this._model);
      }
      this.editing = false;
    }
  }

  remove(): void {
    this.store.removeTask(this._model);
  }

  toggleStatus(): void {
    this._model.completed = !this._model.completed;
    this.store.updateTask(this._model);
  }
}
