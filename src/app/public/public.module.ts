import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from './public.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        PublicComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        PublicRoutingModule,
        SharedModule,
        CommonModule
    ],
    providers: [
    ],
    exports: [
    ]
})
export class PublicModule { }
