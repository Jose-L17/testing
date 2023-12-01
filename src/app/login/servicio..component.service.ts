import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginSevice {
  private loggedInSubject = new Subject<any>();
  //Variable cuyo fin es almacenar los cambios efectuados en la variable loggedInSubject, la cual se convirtió en un observable para permitirle
  //cambiar su valor de forma dinámica y monitorear su cambio
  loggedIn$ = this.loggedInSubject.asObservable();

  //Función para avisar al sistema del estado de inicio de sesión, por ejemplo, si es true quiere decir que ha iniciado sesión con exito, caso contrario seguirá siendo false, negando que el usuario avance a los siguientes componentes
  Actualizar_Login(loggedIn: boolean) {
    this.loggedInSubject.next(loggedIn);
  }
}
