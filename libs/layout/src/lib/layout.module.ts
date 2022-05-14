import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { LayoutRoutingModule } from './layout.routing';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		// LayoutRoutingModule,
		RouterModule,
		MenuModule
	],
	declarations: [
		FooterComponent,
		HeaderComponent,
		MainComponent,
		MenuComponent,
		MenuItemComponent,
	],
	exports: [
		FooterComponent,
		HeaderComponent,
		MainComponent,
		MenuComponent,
		MenuItemComponent,
	],
})
export class LayoutModule {}
