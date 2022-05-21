import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ArchimedesModule } from './archimedes/archimedes.module';
import { APP_CONFIG } from '@opi/config';
import { environment } from '../environments/environment.prod';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ArchimedesModule,
	],
	declarations: [AppComponent],
	providers: [{ provide: APP_CONFIG, useValue: environment }],
	bootstrap: [AppComponent],
})
export class AppModule {}
