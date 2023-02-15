import {Component} from '@angular/core';


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
  constructor(){
    if(localStorage.getItem('userInfo')){
      this.userInfo =JSON.parse(localStorage.getItem('userInfo') || '{}')
      this.finishSignUp(this.userInfo)
    }
  }

}
