import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApostadorCreateComponent } from './apostador/apostador-create/apostador-create.component';
import { ApostadorListComponent } from './apostador/apostador-list/apostador-list.component';

const routes: Routes = [
  {
    path: '',
    component: ApostadorListComponent,
    pathMatch: 'full'
  },
  {
    path: 'apostadores/crear',
    component: ApostadorCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
