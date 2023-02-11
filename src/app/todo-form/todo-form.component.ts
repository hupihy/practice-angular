import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() onAdd:EventEmitter<Task> = new EventEmitter<Task>()
  newTask=''

  addNewTask() {
    if (this.newTask.trim()) {
      const task: Task = {
        taskText: this.newTask,
        status: false,
      }
      this.onAdd.emit(task)
      this.newTask = ''
    }
  }

}
