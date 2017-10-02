import { NgModule } from '@angular/core';
import 'hammerjs';
import { MdInputModule, MdButtonModule, MdButtonToggleModule,
         MdCheckboxModule, MdRadioModule,
         MdSelectModule, MdAutocompleteModule,
         MdCardModule, MdListModule, MdTabsModule,
         MdMenuModule, MdSidenavModule, MdToolbarModule,
         MdIconModule, MdChipsModule,
         MdDialogModule, MdSnackBarModule,
         MdTableModule, MdPaginatorModule, MdSortModule } from '@angular/material';

@NgModule({
  imports: [
    MdInputModule, MdButtonModule, MdButtonToggleModule,
    MdCheckboxModule, MdRadioModule,
    MdSelectModule, MdAutocompleteModule,
    MdCardModule, MdListModule, MdTabsModule,
    MdMenuModule, MdSidenavModule, MdToolbarModule,
    MdIconModule, MdChipsModule,
    MdDialogModule, MdSnackBarModule,
    MdTableModule, MdPaginatorModule, MdSortModule
  ],
  exports:  [ MdInputModule, MdButtonModule, MdButtonToggleModule,
              MdCheckboxModule, MdRadioModule,
              MdSelectModule, MdAutocompleteModule,
              MdCardModule, MdListModule, MdTabsModule,
              MdMenuModule, MdSidenavModule, MdToolbarModule,
              MdIconModule, MdChipsModule,
              MdDialogModule, MdSnackBarModule,
              MdTableModule, MdPaginatorModule, MdSortModule ]
})
export class SharedMaterialModule { }
