import {Component, EventEmitter, Output} from '@angular/core';
import {task} from "../main-content/main-content.component";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() onAdd:EventEmitter<task> = new EventEmitter<task>()

  newTask:string
  addNewTask() {
    if (this.newTask.trim()) {
      const task: task = {
        taskText: this.newTask,
        done: false,
      }
      this.onAdd.emit(task)
      this.newTask = ''
    }
  }
}
