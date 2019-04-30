import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class NoTrainerGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const isTrainer = this.authService.isTrainer.getValue();
    return of(!isTrainer);
  }
}
