import {Injectable} from "@angular/core";

interface User {
  userFirstName: string;
  userSecondName: string;
  userId?: number;
}

@Injectable({providedIn: 'root'})
export class SingUpService {
  isAuthorized: boolean;
  newUser: User = {
    userFirstName: '',
    userSecondName: ''
  }

  createNewUser(firstName: string, secondName: string) {
    if (firstName.trim() && secondName.trim()) {
      this.newUser.userFirstName = firstName;
      this.newUser.userSecondName = secondName;
      this.isAuthorized = true;
      localStorage.setItem('userAuthorized', JSON.stringify(this.isAuthorized))
      localStorage.setItem('userInfo', JSON.stringify(this.newUser))
    }
  }

}
