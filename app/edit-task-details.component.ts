import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class="container task-form form-group">
      <label for="description">Edit Description: </label>
      <input name="description" [(ngModel)]="task.description" class="col-sm-8 input-lg task-form form-control"/>
      <label for="priority">Edit Priority Level: </label>
      <input name="priority" [(ngModel)]="task.priority" class="col-sm-8 input-lg task-for form-control"/>
      <label for="category">Edit Category Level: </label>
      <input name="category" [(ngModel)]="task.category" class="col-sm-8 input-lg task-for form-control"/>
    </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
