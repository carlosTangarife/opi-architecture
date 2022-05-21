import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AccessComponent } from './access/access.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';
import { ErrorComponent } from './error/error.component';
import { FileComponent } from './file/file.component';
import { FloatLayoutComponent } from './float-layout/float-layout.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { PrimengModule } from './primeng.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	imports: [CommonModule, PrimengModule],
	declarations: [
		ButtonComponent,
		InputComponent,
		AccessComponent,
		DashboardComponent,
		EmptyComponent,
		ErrorComponent,
		FileComponent,
		FloatLayoutComponent,
		FloatLabelComponent,
		FormLayoutComponent,
		LoginComponent,
		NotFoundComponent,
	],
	exports: [
		ButtonComponent,
		InputComponent,
		AccessComponent,
		DashboardComponent,
		EmptyComponent,
		ErrorComponent,
		FileComponent,
		FloatLayoutComponent,
		FloatLabelComponent,
		FormLayoutComponent,
		LoginComponent,
		NotFoundComponent
	],
})
export class UiModule {}
