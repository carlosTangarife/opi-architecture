import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@opi/layout').then((m) => m.LayoutModule),
	},
	{ path: '', redirectTo: '', pathMatch: 'full' },
	{ path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
	useHash: false,
};

@NgModule({
	imports: [RouterModule.forRoot(routes, config)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
