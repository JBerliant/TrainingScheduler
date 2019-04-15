import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './signup.component.html',
    providers:[AuthService],
})
export class SignUpComponent {
    firstName = '';
    lastName = '';
    email = '';
    password = '';
    phone = '';

    constructor() { }

    signUp(): void {
        const newUser = {
            firstName : this.firstName,
            lastName : this.lastName,
            phone: this.phone,
            email : this.email,
            password : this.password,
        };
        /*{
          this.authService.signup(newUser.firstName, newUser.lastName, newUser.email, newUser.password);{
          console.log('tried an failed?');
          }
        }
        */
        if (newUser.firstName && newUser.lastName && newUser.email && newUser.password && newUser.phone) {
          console.log(newUser);
        } else {
            console.log('broken-form');
         }

      }
}
