import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatLabelComponent } from './float-label.component';

describe('FloatLabelComponent', () => {
	let component: FloatLabelComponent;
	let fixture: ComponentFixture<FloatLabelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FloatLabelComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FloatLabelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
