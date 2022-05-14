import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'user',
				loadChildren: () => import('@opi/user').then((m) => m.UserModule),
			},
			{ path: '', redirectTo: 'user', pathMatch: 'full' },
			{ path: '**', redirectTo: 'user' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
