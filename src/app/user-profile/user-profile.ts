import { Component, Input, Output,  EventEmitter, NgModule, input, output } from "@angular/core";

import { FormsModule } from '@angular/forms'
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: 'user-profile',
  standalone: true,
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css'],
})
export class UserProfile { 
  @Input() nombre: string = ''
  @Input() apellido: string = ''
  @Input() email: string = ''
  @Input() paginaWeb: string = ''
  @Input() contrasena: string = ''

  @Output() usuarioRegistrado = new EventEmitter <string>()

  regitrarUsuario (){
    this.usuarioRegistrado.emit ( `El usuario ${this.nombre} ${this.apellido}, email: ${this.email}, web: ${this.paginaWeb}, contraseña: ${this.contrasena}, fue registrado correctamente.`)
  }
}