import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguagesComponent} from './components/languages/languages.component';
import {LanguageDialogComponent} from './components/language-dialog/language-dialog.component';
import {MaterialModule} from '../../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LanguagesComponent,
    LanguageDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    LanguagesComponent
  ],
  entryComponents: [
    LanguageDialogComponent
  ]
})
export class LanguageModule {
}
