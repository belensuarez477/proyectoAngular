import { Routes } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { ProfileUser } from './user-profile/profileuser.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'perfilUsuario', pathMatch: 'full' },
  { path: 'perfilUsuario', component: UserProfile },
  { path: 'registroUsuario', component: ProfileUser },
  { path: '**', redirectTo: '' } 
];