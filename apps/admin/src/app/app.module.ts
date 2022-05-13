import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ArchimedesModule } from './archimedes/archimedes.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, ArchimedesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
