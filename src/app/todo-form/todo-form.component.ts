import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output()
  onAddNewTask = new EventEmitter()

  newTaskInput:string

  addNewTask():void{
    if(this.newTaskInput.trim()) {
      this.onAddNewTask.emit(this.newTaskInput)
      this.newTaskInput=''
    }
  }

}
