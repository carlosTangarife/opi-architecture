import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'opi-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input()
	label!: string;

	@Input()
	style!: string;

	@Input()
	type!: 'submit' | 'button';


	@Input()
	rounded = false;

}
