import { Component } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    constructor(public appMain: AppMainComponent) { }
}
