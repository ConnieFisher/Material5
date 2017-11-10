import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' ;
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
