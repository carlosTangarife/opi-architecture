import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AccessComponent } from './access/access.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';
import { ErrorComponent } from './error/error.component';
import { FileComponent } from './file/file.component';
import { FloatlabelComponent } from './floatlabel/floatlabel.component';
import { FloatLayoutComponent } from './float-layout/float-layout.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';

@NgModule({
	imports: [CommonModule],
	declarations: [
		ButtonComponent,
		InputComponent,
		AccessComponent,
		DashboardComponent,
		EmptyComponent,
		ErrorComponent,
		FileComponent,
		FloatlabelComponent,
		FloatLayoutComponent,
		FloatLabelComponent,
		FormLayoutComponent,
	],
	exports: [
		ButtonComponent,
		InputComponent,
		AccessComponent,
		DashboardComponent,
		EmptyComponent,
		ErrorComponent,
		FileComponent,
		FloatlabelComponent,
		FloatLayoutComponent,
		FloatLabelComponent,
		FormLayoutComponent,
	],
})
export class UiModule {}
