import {Component} from '@angular/core';


export interface Task {
  taskText :string
  status:boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  indexTask=0
 Tasks:Task[]= [
   {taskText:'write in inputForm your task',status:false,},
   {taskText:'click in button or enter to create new task ',status:false,},
   {taskText:' just do it!!!!!!!',status:false,},

 ]
  addNewTask(task:Task){
    this.Tasks.unshift(task)
  }
  FinishTask(task:Task){
   task.status =!task.status
  }
  taskIndex:number
  DeleteTask(task:Task){
    this.taskIndex= 0
  for(let deleted of this.Tasks) {
    if (deleted.taskText == task.taskText) {
      this.Tasks.splice(this.taskIndex,1)
    }
    else {
      this.taskIndex++
    }
  }
  }
}

