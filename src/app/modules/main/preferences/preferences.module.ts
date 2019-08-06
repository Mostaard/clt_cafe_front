import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilePreferencesComponent} from './components/profile-preferences/profile-preferences.component';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [ProfilePreferencesComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ProfilePreferencesComponent
  ]
})
export class PreferencesModule {
}
