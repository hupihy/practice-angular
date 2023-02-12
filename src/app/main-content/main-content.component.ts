import { Component } from '@angular/core';


export interface task {
  taskText :string
  done:boolean
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent {
  twists:boolean
  select:string='active'
  allTask:task[]=[{taskText:'write in inputForm your task',done:false,},
    {taskText:'click in button or enter to create new task ',done:false,},
    {taskText:' just do it!!!!!!!',done:false,},]
  tasks:task[]= this.allTask

  renderingSelect(select:string):void {
    this.tasks= this.allTask.filter(item => select === 'finished' ?item.done: !item.done )
    this.select = select
  }
  unTwists(task:task):any{
    this.twists =false
    for(let twists of this.tasks){
      if(twists.taskText == task.taskText){
        return this.twists=true
      }
    }
  }

  addNewTask(task:task):void{
  this.unTwists(task)
    if(!this.twists) {
      this.allTask.unshift(task)
      this.renderingSelect(this.select)
    }
  }

  addFinishedTask(task:string){
    const finishedTask: task = {
      taskText: task,
      done: true,
    }
    this.tasks.push(finishedTask)

  }

  finishTask(task:task):void{
    task.done =!task.done
    this.addFinishedTask(task.taskText)
    this.deleteTask(task)
    this.renderingSelect(this.select)
  }

  deleteTask(task:task):void{
    this.tasks.splice(this.tasks.findIndex(index => index.taskText == task.taskText), 1)
  }
}
