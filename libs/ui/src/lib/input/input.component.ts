import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
	selector: 'opi-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{
    countries!: any[];

    filteredCountries!: any[];

    selectedCountryAdvanced!: any[];

    valSlider = 50;

    valColor = '#424242';

    valRadio!: string;

    valCheck: string[] = [];

    valSwitch!: boolean;

    cities!: SelectItem[];

    selectedList!: SelectItem;

    selectedDrop!: SelectItem;

    selectedMulti = [];

    treeSelectNodes!: any[];

    selectedNode!: SelectItem;

    valToggle = false;

    paymentOptions!: any[];

    valSelect1!: string;

    valSelect2!: string;

    valueKnob = 20;

    selectedDate!:any;

    ngOnInit() {
		this.countries = [
			{name: "Afghanistan", code: "AF"},
			{name: "Albania", code: "AL"},
			{name: "Algeria", code: "DZ"},
			{name: "American Samoa", code: "AS"},
			{name: "Andorra", code: "AD"},
		]
        this.cities = [
            {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
            {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
            {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
            {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
            {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
        ];

        this.paymentOptions = [
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2},
            {name: 'Option 3', value: 3}
        ];

		this.treeSelectNodes = [
			{
				"key": "0",
				"label": "Documents",
				"data": "Documents Folder",
				"icon": "pi pi-fw pi-inbox",
				"children": [{
					"key": "0-0",
					"label": "Work",
					"data": "Work Folder",
					"icon": "pi pi-fw pi-cog",
					"children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
				},
				{
					"key": "0-1",
					"label": "Home",
					"data": "Home Folder",
					"icon": "pi pi-fw pi-home",
					"children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
				}]
			},
			{
				"key": "1",
				"label": "Events",
				"data": "Events Folder",
				"icon": "pi pi-fw pi-calendar",
				"children": [
					{ "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
					{ "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
					{ "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
			},
		]
    }

    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}
