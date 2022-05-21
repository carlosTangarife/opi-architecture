import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
	AccessComponent,
	EmptyComponent,
	ErrorComponent,
	LoginComponent,
	NotFoundComponent,
} from '@opi/ui';

const ROUTES: Routes = [
	{
		path: 'app',
		loadChildren: () => import('@opi/layout').then((m) => m.LayoutModule),
	},
	{
		path: 'login',
		component: LoginComponent,
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

	{ path: 'notfound', component: NotFoundComponent },

	{ path: '', redirectTo: 'app', pathMatch: 'full' },
	{ path: '**', redirectTo: 'app' },
];
@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
