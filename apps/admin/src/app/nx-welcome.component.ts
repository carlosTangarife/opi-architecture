import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'opi-nx-welcome',
  template: `
  <button pButton type="button" class="p-button-info"></button>
  <button pButton type="button" label="Primary"></button>
  <button pButton type="button" label="Secondary" class="p-button-secondary"></button>
  <button pButton type="button" label="Success" class="p-button-success"></button>
  <button pButton type="button" label="Info" class="p-button-info"></button>
  <button pButton type="button" label="Warning" class="p-button-warning"></button>
  <button pButton type="button" label="Help" class="p-button-help"></button>
  <button pButton type="button" label="Danger" class="p-button-danger"></button>
`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
