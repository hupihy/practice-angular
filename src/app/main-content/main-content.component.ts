import {Component} from '@angular/core';

 export interface TASK{
   taskText:string
   done:boolean
 }

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent {

  loginStatus:boolean=false
  displayUserSetting:boolean=false
  userFirstName:string
  userSecondName:string
  userInfo:string[]
  allTask:TASK[]=[]

  finishSignUp(userInfo:string[]):void {
    this.loginStatus = true
    this.userFirstName= userInfo[0]
    this.userSecondName=userInfo[1]
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
  }
  finishSetting(userInfo:string[]):void{
    this.displayUserSetting=false
    this.userFirstName= userInfo[0]
    this.userSecondName=userInfo[1]
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
  }
  createNewTask(task:string):void{
    if(!this.allTask.find(item=>item.taskText===task)){
      const newTask:TASK={
        taskText:task,
        done:false,
    }
      this.allTask.push(newTask)
      localStorage.setItem('allTasks',JSON.stringify(this.allTask))
    }
  }
  finishTask(task:TASK){task.done =!task.done}
  deleteTask(task:TASK){
    this.allTask.splice(this.allTask.findIndex(index => index.taskText == task.taskText), 1)
    localStorage.setItem('allTasks',JSON.stringify(this.allTask))
  }
  constructor(){
    if(localStorage.getItem('userInfo')){
      this.userInfo =JSON.parse(localStorage.getItem('userInfo') || '{}')
      this.finishSignUp(this.userInfo)
    }
    if(localStorage.getItem('allTasks')){
      this.allTask = JSON.parse(localStorage.getItem('allTasks')||'{}')
    }
  }
}
