import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TASK} from '../main-content/main-content.component'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  @Output() onFinishTask = new EventEmitter()
  @Output() onDeleteTask = new EventEmitter()
  @Input()  task:TASK

  finishTask(){
    this.onFinishTask.emit(this.task)
  }
  deleteTask(){
    this.onDeleteTask.emit(this.task)
  }
}
