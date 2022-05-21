import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccessComponent, EmptyComponent, ErrorComponent } from '@opi/ui';

const ROUTES: Routes = [
	{
		path: 'app',
		loadChildren: () => import('@opi/layout').then((m) => m.LayoutModule),

	},
	{
		path: 'access',
		component: AccessComponent,
	},
	{
		path: 'empty',
		component: EmptyComponent,
	},
	{
		path: 'error',
		component: ErrorComponent,
	},
	{ path: '', redirectTo: 'app', pathMatch: 'full' },
	{ path: '**', redirectTo: 'app' },
];
@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
