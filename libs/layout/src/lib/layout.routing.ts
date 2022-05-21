import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent, ButtonComponent, DashboardComponent, EmptyComponent, ErrorComponent, FileComponent, FloatLabelComponent, FormLayoutComponent, InputComponent } from '@opi/ui';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'formlayout',
				component: FormLayoutComponent
			},
			{
				path: 'input',
				component: InputComponent
			},
			{
				path: 'floatlabel',
				component: FloatLabelComponent
			},
			{
				path: 'button',
				component: ButtonComponent
			},
			{
				path: 'file',
				component: FileComponent
			},
			{
				path: 'user',
				loadChildren: () => import('@opi/user').then((m) => m.UserModule),
			}
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
