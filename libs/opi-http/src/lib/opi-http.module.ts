import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header-interceptors';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
	]
})
export class OpiHttpModule {}
