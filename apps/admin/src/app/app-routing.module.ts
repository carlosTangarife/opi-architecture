import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { EmptyComponent } from './components/empty/empty.component';
import { FileComponent } from './components/file/file.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FloatLabelComponent } from './components/floatlabel/floatlabel.component';
import { AccessComponent } from './components/access/access.component';
import { MainComponent } from '@opi/layout';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: MainComponent,
                children: [
                    {path: '', component: DashboardComponent},
                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/input', component: InputComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent},
                    {path: 'uikit/button', component: ButtonComponent},
                    {path: 'uikit/file', component: FileComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                ],
            },
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
