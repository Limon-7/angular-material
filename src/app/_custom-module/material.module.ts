import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatSelectModule,
    MatIconModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule {

}
