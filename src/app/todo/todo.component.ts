import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
 @Output()  onFinish:EventEmitter<Task> = new EventEmitter<Task>()
  @Output() onDelete:EventEmitter<Task> = new EventEmitter<Task>()
 @Input()  task:Task
  buttonText='finished'
  changeButtonText(){
   if(this.task.status){
     this.buttonText='return'
   }
   else {
     this.buttonText='finished'
   }
  }

  finishedTask(task:Task) {
    this.onFinish.emit(task)
    this.changeButtonText()
  }
  deleteTask(task:Task){
   this.onDelete.emit(task)

  }
}
