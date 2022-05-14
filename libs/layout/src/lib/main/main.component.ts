import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
	trigger('submenu', [
		state('hidden', style({
			height: '0px'
		})),
		state('visible', style({
			height: '*'
		})),
		transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
		transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
	])
]
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
