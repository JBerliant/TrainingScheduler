import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signup.component.html',
})
export class SignUpComponent {
    firstName = '';
    lastName = '';
    phone = '';
    email = '';
    password = '';

    constructor(private authService: AuthService, private router: Router) { }

    signUp(): void {
        const newUser = {
            firstName : this.firstName,
            lastName : this.lastName,
            phone: this.phone,
            email : this.email,
            password : this.password,
        };
      if (
        newUser.firstName &&
        newUser.lastName &&
        newUser.phone &&
        newUser.email &&
        newUser.password
      ) {
        this.authService
          .signup(
            newUser.firstName,
            newUser.lastName,
            newUser.phone,
            newUser.email,
            newUser.password
          ).subscribe(response => {
            this.router.navigateByUrl('/login');
          });
       // console.log(newUser);
      } else {
        console.log('broken-form');
      }

    }
}
