import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from '@opi/layout';
import { AccessComponent, EmptyComponent, ErrorComponent } from '@opi/ui';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: MainComponent,
				loadChildren: () => import('@opi/layout').then((m) => m.LayoutModule),
            },
			{
				path: 'pages',
				children:[
					{
						path: 'access',
						component: AccessComponent
					},
					{
						path: 'empty',
						component: EmptyComponent
					},
					{
						path: 'error',
						component: ErrorComponent
					},
				]
			},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
