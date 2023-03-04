import {Component, OnInit} from '@angular/core';
import {TodoAppService} from "../todo-app/todo-app.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.css']
})
export class NewSectionComponent  implements OnInit{
  newSectionForm :FormGroup

  constructor(private TodoAppService: TodoAppService , private Router:Router) {
  }
  ngOnInit() {
    this.newSectionForm = new FormGroup({
      name : new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
      description : new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  createNewSection() {
    this.TodoAppService.createNewSection(this.newSectionForm.get('name').value , this.newSectionForm.get('description').value);
    this.Router.navigate(['/appTodo'])
  }
}
