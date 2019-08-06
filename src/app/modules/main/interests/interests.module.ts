import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InterestsComponent} from './components/interests/interests.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import { InterestsSearchComponent } from './components/interests-search/interests-search.component';

@NgModule({
  declarations: [InterestsComponent, InterestsSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    InterestsComponent,
  ]
})
export class InterestsModule {
}
