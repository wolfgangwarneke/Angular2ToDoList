import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
  <select (change)='onChange($event.target.value)' class="filter">
    <option value= 'all'>Show All</option>
    <option value= 'done'>Show Done</option>
    <option value= 'notDone' selected = 'selected'>Show Not Done</option>
  </select>

  <task-display *ngFor="#currentTask of taskList | done:filterDone:selectedTask"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
  </task-display>
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  </edit-task-details>
  <new-task (onSubmitNewTask)="createTask($event[0],$event[1],$event[2])"></new-task>
  `
  // createTask($event[0],$event[1],$event[2]) needs all 3 to display them seperatly
})
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string ='notDone';
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description: string, priority: string, category: string): void {
    this.taskList.push(
      new Task(description, priority, category, this.taskList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
