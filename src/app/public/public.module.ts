import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../core/shared/shared.module';
import { CoreModule } from '../core/core.module';
import { PublicComponent } from './public.component';


@NgModule({
    declarations: [
        PublicComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        PublicRoutingModule,
        SharedModule
    ],
    providers: [
    ],
    exports: [
    ]
})
export class PublicModule { }
