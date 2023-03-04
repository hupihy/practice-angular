import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SingUpService} from "./sing-up.service";

@Component({
  selector: 'app-user-sing-up',
  templateUrl: './user-sing-up.component.html',
  styleUrls: ['./user-sing-up.component.css']
})
export class UserSingUpComponent implements OnInit {

  newUserForm: FormGroup

  constructor(private router: Router, private SingUpService: SingUpService) {

  }

  ngOnInit() {
    this.newUserForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),

      secondName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      userSex: new FormControl('', Validators.required),
    })
  }

  createNewUser() {
    this.SingUpService.createNewUser(this.newUserForm.get('firstName').value, this.newUserForm.get('secondName').value)
    this.router.navigate(['/todoApp']);
  }
}

