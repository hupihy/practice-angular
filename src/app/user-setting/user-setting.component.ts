import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent {
  @Output()
  onFinishSetting = new EventEmitter()

  userFirstNameInput:string
  userSecondNameInput:string

  userInfo:string[]=[]

  finishSetting():void{
    if(this.userFirstNameInput.trim() && this.userSecondNameInput.trim()){
      this.userInfo.push(this.userFirstNameInput,this.userSecondNameInput)
      this.onFinishSetting.emit(this.userInfo)
      console.log(this.userInfo)
    }
  }
}
