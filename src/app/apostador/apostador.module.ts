import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../app-header/app-header.module';
import { ApostadorCreateComponent } from './apostador-create/apostador-create.component';
import { ApostadorListComponent } from './apostador-list/apostador-list.component';


@NgModule({
  declarations: [ApostadorListComponent, ApostadorCreateComponent],
  imports: [
    CommonModule, ReactiveFormsModule, AppHeaderModule, FormsModule
  ],
  exports: [ApostadorListComponent, ApostadorCreateComponent]
})
export class ApostadorModule { }
