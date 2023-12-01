import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSevice } from '../login/servicio..component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginSevice
  ) { }

  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }

  updateUsername(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  updatePassword(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }

  async IniciarSesion() {
    if (this.username == 'admin@hotmail.com' && this.password == 'admin') {
      this.loginService.Actualizar_Login(true);
  }
}

}
