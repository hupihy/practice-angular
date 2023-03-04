import {Component,} from '@angular/core';
import {SingUpService} from "../user-sing-up/sing-up.service";
import {Router} from "@angular/router";
import {TodoAppService} from "./todo-app.service";

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {

  newTaskInput: string = '';


  constructor(public SingUpService: SingUpService, private Router: Router, public TodoAppService: TodoAppService) {
    if (localStorage.getItem('userAuthorized') || localStorage.getItem('userInfo')) {
      this.SingUpService.isAuthorized = JSON.parse(localStorage.getItem('userAuthorized') || '{}');
      this.SingUpService.newUser = JSON.parse(localStorage.getItem('userInfo') || '{}')

    }
    if (!this.SingUpService.isAuthorized) {
      Router.navigate(['/'])
    }
  }


  createNewTask(): void {
    this.TodoAppService.createNewTask(this.newTaskInput)
    this.newTaskInput = ''
  }
}
