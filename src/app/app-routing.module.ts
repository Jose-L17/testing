import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { DesviacionComponent } from './desviacion/desviacion.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
const routes: Routes = [
  { path: 'Inicio', component: FrontComponent },
  { path: 'Media', component: DesviacionComponent },
    { path: 'Regrsion', component: CorrelationComponent },
  { path: 'Simpson', component: SimpsonComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
