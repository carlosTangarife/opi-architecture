import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { LayoutModule } from '@opi/layout';

@NgModule({
    imports: [
		LayoutModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
