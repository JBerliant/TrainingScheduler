import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './common/auth/login.component';
import { SignUpComponent } from './common/auth/signup.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventInfoComponent } from './events/event-info/event-info.component';
import {AuthGuard} from './common/auth/auth.guard';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'event-list', component: EventListComponent},
  { path: 'event/:id',
  canActivate: [AuthGuard],
  component: EventInfoComponent},
  { path: 'event', component: EventListComponent},
  { path: 'event/add',
  canActivate: [AuthGuard],
  component: EventInfoComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
