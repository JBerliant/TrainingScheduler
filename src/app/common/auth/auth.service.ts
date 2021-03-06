import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/do';


export interface IUser {
  id: number;
  first: string;
  last: string;
  email: string;
  phone: string;
  userRoleId: number;
  isTrainer: boolean;
  aboutMe: string;
}

export interface ILoginResponse {
    success: boolean;
    token?: string;
    user: IUser;
}
export enum UserRoles {
Admin = 1,
User = 2,
}

@Injectable()
export class AuthService {

    token: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isTrainer: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(private http: HttpClient) {}

    isAuthenticated(): boolean {
        return this.token.getValue() ? true : false;
    }

    login(email: string, password: string): Observable<ILoginResponse> {
        const data = {
            email: email,
            password: password,
        };
        return this.http.post<ILoginResponse>('http://localhost:3000/login', data).pipe(
          tap((response) => {
            this.token.next(
              (response && response.success && response.token) || null,
            );
          this.isAdmin.next(
            response && response.success && response.user.userRoleId === UserRoles.Admin
           ? true
           : false,
           );
          this.isTrainer.next(
            response && response.success && response.user.isTrainer === true
            ? true
            : false,
          );
          }),
        );
 }

  getAll(): Observable<IUser[]> {
  return this.http.get<IUser[]>('http://localhost:3000/users');
  }

    logout(): void {
        this.token.next(null);
        this.isAdmin.next(false);
        this.isTrainer.next(false);
    }
    signup(firstName: string, lastName: string,  phone: string, email: string, password: string): Observable<any> {
      const data = {
        first: firstName,
        last: lastName,
        phone: phone,
        email: email,
        password: password,
        userRoleId: 2,
        isTrainer: 0,
        aboutme: 'I am on Eventr.',
      //  createdAt: new Date(),
     //   updatedAt: new Date()
      };
      return this.http.post<any>('http://localhost:3000/users', data);
  }
}

