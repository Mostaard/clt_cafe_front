import {NgModule} from '@angular/core';
import {ProfileModule} from './profile/profile.module';
import {NavigationModule} from './navigation/navigation.module';
import {MainNavigationComponent} from './navigation/components/main-navigation/main-navigation.component';


@NgModule({
  imports: [
    ProfileModule,
    NavigationModule
  ],
  exports: [
    MainNavigationComponent
  ],
})
export class MainModule {
}
