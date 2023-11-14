import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { DesviacionComponent } from './desviacion/desviacion.component';
import { CorrelationComponent } from './correlation/correlation.component';

const routes: Routes = [
  { path: 'Media', component: DesviacionComponent },
    { path: 'Regrsion', component: CorrelationComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
