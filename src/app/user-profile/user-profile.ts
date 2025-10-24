import { Component, Input, Output,  EventEmitter, NgModule } from "@angular/core";
import { Navbar } from "../navbar/navbar";
import { FormsModule } from '@angular/forms'
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: 'user-profile',
  standalone: true,
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css'],
  imports: [ FormsModule,]
})
export class UserProfile {

}