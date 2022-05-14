import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'opi-float-label',
	templateUrl: './float-label.component.html',
	styleUrls: ['./float-label.component.scss'],
})
export class FloatLabelComponent implements OnInit {

    cities!: any[];

    value1: any;

    value2: any;

    value3: any;

    value4: any;

    value5: any;

    value6: any;

    value7: any;

    value8: any;

    value9: any;

    value10: any;

    value11: any;

    value12: any;

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}
