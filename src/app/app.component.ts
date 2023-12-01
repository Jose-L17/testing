import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSevice } from './login/servicio..component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private router: Router,
    private loginService: LoginSevice
  ) { }

  loggedIn: boolean = false;

  ngOnInit(): void {
    this.loginService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

  }


}
