import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: 'done',
  pure: false
  // pure: false when task checked it will automatically disappear
    // pure: true when task cheked it will stay there
})

export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredDoneState = args[0];
    console.log('selected task: ', args[1]);
    if( desiredDoneState === 'done') {
      return input.filter((task) => {
        return task.done;
      });
    } else if (desiredDoneState === 'notDone') {
      return input.filter((task) => {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}
