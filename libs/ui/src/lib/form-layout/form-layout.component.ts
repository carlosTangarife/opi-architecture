import { Component } from '@angular/core';

@Component({
	selector: 'opi-form-layout',
	templateUrl: './form-layout.component.html',
	styleUrls: ['./form-layout.component.scss'],
})
export class FormLayoutComponent {
    selectedState:any;

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];
}
