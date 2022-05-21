import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ArchimedesModule } from './archimedes/archimedes.module';
import { APP_CONFIG } from '@opi/config';
import { environment } from '../environments/environment.prod';
import { OpiHttpModule } from '@opi/opi-http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ArchimedesModule,
		OpiHttpModule,
		ToastModule,
	],
	declarations: [AppComponent],
	providers: [MessageService, { provide: APP_CONFIG, useValue: environment }],
	bootstrap: [AppComponent],
})
export class AppModule {}
