import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './libraries/material/material.module';

import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        MaterialModule
    ],
    providers: [
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        NotFoundComponent
    ]
})
export class SharedModule { }
