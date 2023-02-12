import {Component, EventEmitter, Output} from '@angular/core';
import {task} from "../main-content/main-content.component";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() onAdd:EventEmitter<task> = new EventEmitter<task>()
  @Output() onFilter:EventEmitter<string> = new EventEmitter<string>()

  newTask:string

  addNewTask():void{
    if (this.newTask.trim()) {
      const task: task = {
        taskText: this.newTask,
        done: false,
      }
      this.onAdd.emit(task)
      this.newTask = ''
    }
  }

    sectionSelection(select:string):void {
    this.onFilter.emit(select)
  }
}

