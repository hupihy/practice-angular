import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent {
  @Output()
  onFinishSingUp = new EventEmitter()

  userFirstNameInput:string
  userSecondNameInput:string

  userInfo:string[]=[]
  finishSignUp():void {
    if(this.userFirstNameInput.trim() && this.userSecondNameInput.trim()){
      this.userInfo.push(this.userFirstNameInput,this.userSecondNameInput)
      this.onFinishSingUp.emit(this.userInfo)
      console.log(this.userInfo)
    }
  }
}
