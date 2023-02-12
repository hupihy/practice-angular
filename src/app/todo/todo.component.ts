import {Component, EventEmitter, Input, Output} from '@angular/core';
import {task} from "../main-content/main-content.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  @Output()  onFinish:EventEmitter<task> = new EventEmitter<task>()
  @Output() onDelete:EventEmitter<task> = new EventEmitter<task>()
  @Input()  task:task

  finishedTask(task:task) {
    this.onFinish.emit(task)

  }
  deleteTask(task:task){
   this.onDelete.emit(task)
  }
}
