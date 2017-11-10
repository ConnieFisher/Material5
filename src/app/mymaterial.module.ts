import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule],
    exports: [MatButtonModule, MatToolbarModule]
})

export class MyMaterialModule { }
