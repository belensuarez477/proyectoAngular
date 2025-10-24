import { Component, signal, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { ProfileUser } from './user-profile/profileuser.component';
import { FormsModule } from '@angular/forms';
import { AppNavbar } from "./navbar/navbar.component";
import { NgIf } from '@angular/common';


@Component({
  standalone: true, 
  selector: 'app-root',
imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


 

}
