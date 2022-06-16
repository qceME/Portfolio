import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


const materialModules = [
  MatDialogModule
];

@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})

export class MaterialModule { 
  
  constructor() {

  }

}
