import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'opi-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	valCheck: string[] = ['remember'];

	password!: string;

	constructor() {}

	ngOnInit(): void {}
}
