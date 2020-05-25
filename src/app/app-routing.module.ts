import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';


const routes: Routes = [
  {path: '', component: BoxesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
