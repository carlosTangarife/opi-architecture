import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatLayoutComponent } from './float-layout.component';

describe('FloatLayoutComponent', () => {
	let component: FloatLayoutComponent;
	let fixture: ComponentFixture<FloatLayoutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FloatLayoutComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FloatLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
