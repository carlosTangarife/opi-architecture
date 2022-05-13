import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
