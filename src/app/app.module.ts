import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule} from "@angular/forms";
import { MainContentComponent } from './main-content/main-content.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoComponent,
    MainContentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
