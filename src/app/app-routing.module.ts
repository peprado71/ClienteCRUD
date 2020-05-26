import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapturasListComponent } from './components/capturas-list/capturas-list.component';
import { CapturaDetailsComponent } from './components/captura-details/captura-details.component';
import { AddCapturaComponent } from './components/add-captura/add-captura.component';

const routes: Routes = [
  { path: '', redirectTo: 'capturas', pathMatch: 'full' },
  { path: 'capturas', component: CapturasListComponent },
  { path: 'capturas/:id', component: CapturaDetailsComponent },
  { path: 'add', component: AddCapturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
