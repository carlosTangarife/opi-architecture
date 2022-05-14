import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
	selector: 'opi-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	items!: MenuItem[];

	// products!: Product[];

	chartData!: any;

	chartOptions!: any;

	subscription!: Subscription;

	// constructor(private productService: ProductService) {}

	ngOnInit() {
		this.updateChartOptions();
		// this.productService
		// 	.getProductsSmall()
		// 	.then((data) => (this.products = data));

		this.items = [
			{ label: 'Add New', icon: 'pi pi-fw pi-plus' },
			{ label: 'Remove', icon: 'pi pi-fw pi-minus' },
		];

		this.chartData = {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
			],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					backgroundColor: '#2f4860',
					borderColor: '#2f4860',
					tension: 0.4,
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					fill: false,
					backgroundColor: '#00bb7e',
					borderColor: '#00bb7e',
					tension: 0.4,
				},
			],
		};
	}

	updateChartOptions() {
		this.applyLightTheme();
	}

	applyLightTheme() {
		this.chartOptions = {
			plugins: {
				legend: {
					labels: {
						color: '#495057',
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: '#495057',
					},
					grid: {
						color: '#ebedef',
					},
				},
				y: {
					ticks: {
						color: '#495057',
					},
					grid: {
						color: '#ebedef',
					},
				},
			},
		};
	}
}
