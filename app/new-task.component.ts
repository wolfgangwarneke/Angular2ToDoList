import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form form-group">
      <h3>Create Task:</h3>
      <label for="description">Description</label>
      <input name="description" placeholder="Description" class="col-sm-8 input-lg form-control" #newDescription>
      <hr>
      <label for="priority">Priority</label>
      <select name="priority" placeholder="Priority" class="col-sm-4 input-lg form-control" #newPriority>
        <option value="HIGH">HIGH!!!!</option>
        <option value="Medium">Medium?</option>
        <option value="low">low.....</option>
      </select>
      <label for="category">Category</label>
      <select name="category" placeholder="Category" class="col-sm-4 input-lg form-control" #newCategory>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Hobby">Hobby</option>
      </select>
      <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button form-control">Add</button>
    </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<string[]>;
  public dataArray: Array<string>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement){
    this.dataArray = [];
    this.dataArray.push(userDescription.value);
    this.dataArray.push(userPriority.value);
    this.dataArray.push(userCategory.value);
    this.onSubmitNewTask.emit(this.dataArray);
    userDescription.value = "";
    userPriority.value = "";
    userCategory.value = "";
  }
}
