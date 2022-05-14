import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    CardModule,
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
    InputTextModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
    InputTextModule
  ],
})
export class PrimengModule {}
