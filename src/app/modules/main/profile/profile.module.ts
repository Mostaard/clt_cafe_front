import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './components/profile/profile.component';
import {MaterialModule} from '../../material/material.module';
import {LanguageModule} from '../language/language.module';
import {InterestsModule} from '../interests/interests.module';
import {MomentsModule} from '../moments/moments.module';
import {PreferencesModule} from '../preferences/preferences.module';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    InterestsModule,
    LanguageModule,
    MaterialModule,
    MomentsModule,
    ProfileRoutingModule,
    PreferencesModule,
  ],

})
export class ProfileModule {
}
