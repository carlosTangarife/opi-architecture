import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header-interceptors';
import { ErrorInterceptor } from './interceptors/error-interceptors';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
	]
})
export class OpiHttpModule {}
