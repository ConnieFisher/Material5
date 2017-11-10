import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' ;
<<<<<<< HEAD
import { MatButtonModule,  MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule} from '@angular/material' ;
@NgModule({
    imports: [
        MatButtonModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule

    ],
    exports: [
        MatButtonModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule],

export class MaterialModule {}
=======
import { MatButtonModule, MatToolbarModule } from '@angular/material' ;

@NgModule({
    imports: [MatButtonModule, MatToolbarModule],
    exports: [MatButtonModule, MatToolbarModule],
})
export class MaterialModule { }
>>>>>>> parent of 80eda69... added imports to app.module
