import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './task/todo-form/todo-form.component';
import { TodoComponent } from './task/todo/todo.component';
import {FormsModule} from "@angular/forms";
import { MainContentComponent } from './main-content/main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgOptimizedImage} from "@angular/common";
import { LoginUserComponent } from './user/login-user/login-user.component';
import { UserSettingComponent } from './user/user-setting/user-setting.component';
import { TodoAddSectionComponent } from './task/todo-add-section/todo-add-section.component';





@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoComponent,
    MainContentComponent,
    LoginUserComponent,
    UserSettingComponent,
    TodoAddSectionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgOptimizedImage,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
