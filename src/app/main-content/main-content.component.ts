import {Component} from '@angular/core';

 export interface TASK{
   taskText:string
   done:boolean
   selection:string
 }
 export interface SELECTION{
   name:string
   description:string
 }

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent {

  loginStatus:boolean=false
  displayUserSetting:boolean=false
  createNewSection:boolean=false
  userFirstName:string
  userSecondName:string
  userIco:string
  userInfo:string[]
  allSelection:SELECTION[]=[
    {
      name:'today task',
      description:'Today create your best dreams',
    },
  ]
  allTask:TASK[]=[]
  visibleTask:TASK[]=[]
  selectionNameNow:string
  selectionDescriptionNow:string


  createNewSelection(selectionInfo:string[]):void{
    const newSelection:SELECTION={
      name:selectionInfo[1],
      description:selectionInfo[0],
    }
    this.allSelection.push(newSelection)
    this.createNewSection=false
    localStorage.setItem('selections',JSON.stringify(this.allSelection))
  }
  finishSignUp(userInfo:string[]):void {
    this.loginStatus = true
    this.userFirstName= userInfo[0]
    this.userSecondName=userInfo[1]
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
    if(userInfo[2]=='woman'){
      this.userIco='/assets/default-ico.jpg'
    }
    else {
      this.userIco = '/assets/default-man-ico.jpg'
    }
  }
  finishSetting(userInfo:string[]):void{
    this.displayUserSetting=false
    this.userFirstName= userInfo[0]
    this.userSecondName=userInfo[1]
    if(userInfo[2]=='woman'){
      this.userIco='/assets/default-ico.jpg'
    }
    else {
      this.userIco = '/assets/default-man-ico.jpg'
    }
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
  }
  createNewTask(task:string):void{
    if(!this.allTask.find(item=>item.taskText===task)){
      const newTask:TASK={
        taskText:task,
        done:false,
        selection:this.selectionNameNow
    }
      this.allTask.push(newTask)
      localStorage.setItem('allTasks',JSON.stringify(this.allTask))
    }
    let selectNow:SELECTION={
      name:this.selectionNameNow,
      description:this.selectionDescriptionNow
    }
    this.viewTasks(selectNow)
  }
  viewTasks(section:SELECTION):TASK[]{
    this.selectionNameNow = section.name
    this.selectionDescriptionNow = section.description
    this.visibleTask = []
    this.allTask.find(item => {
    if (section.name == item.selection){
      this.visibleTask.push(item)
    }
  })
    return this.visibleTask

  }
  finishTask(task:TASK){task.done =!task.done}
  deleteTask(task:TASK){
    this.allTask.splice(this.allTask.findIndex(index => index.taskText == task.taskText), 1)
    localStorage.setItem('allTasks',JSON.stringify(this.allTask))
    let selectNow:SELECTION={
      name:this.selectionNameNow,
      description:this.selectionDescriptionNow
    }
    this.viewTasks(selectNow)
  }
  constructor(){
    if(localStorage.getItem('userInfo')){
      this.userInfo =JSON.parse(localStorage.getItem('userInfo') || '{}')
      this.finishSignUp(this.userInfo)
    }
    if(localStorage.getItem('allTasks')){
      this.allTask = JSON.parse(localStorage.getItem('allTasks')||'{}')
    }
    if(localStorage.getItem('selections')){
      this.allSelection = JSON.parse(localStorage.getItem('selections')||'{}')
    }
    this.selectionNameNow = this.allSelection[0].name
    this.selectionDescriptionNow =this.allSelection[0].description
    let selectNow:SELECTION={
      name:this.selectionNameNow,
      description:this.selectionDescriptionNow
    }
    this.viewTasks(selectNow)


  }

}
