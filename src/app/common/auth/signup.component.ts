import { Component } from '@angular/core';

@Component({
    templateUrl: './signup.component.html',
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
        if (newUser.firstName && newUser.lastName && newUser.email && newUser.password && newUser.phone) {
          console.log(newUser);
        } else {
            console.log('broken-form');
         }

      }
}
