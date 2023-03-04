import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SingUpService} from "../user-sing-up/sing-up.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  saveUserForm: FormGroup

  constructor(private router: Router, private SingUpService: SingUpService) {

  }

  ngOnInit() {
    this.saveUserForm = new FormGroup({
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

  saveUser() {
    this.SingUpService.createNewUser(this.saveUserForm.get('firstName').value, this.saveUserForm.get('secondName').value)
    this.router.navigate(['/todoApp']);
  }
}
