import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgOptimizedImage} from "@angular/common";
import {TodoAppComponent} from './todo-app/todo-app.component';
import {UserSingUpComponent} from './user-sing-up/user-sing-up.component';
import { SettingComponent } from './setting/setting.component';
import { NewSectionComponent } from './new-chapter/new-section.component';

const appRoutes: Routes = [
  {path: '', component: UserSingUpComponent},
  {path: 'todoApp', component: TodoAppComponent},
  {path:'setting', component:SettingComponent},
  {path:'newChapter', component:NewSectionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    UserSingUpComponent,
    SettingComponent,
    NewSectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
