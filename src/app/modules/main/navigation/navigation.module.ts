import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavigationComponent} from './components/main-navigation/main-navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from '../../material/material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [MainNavigationComponent],
  exports: [MainNavigationComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule,
  ]
})
export class NavigationModule {
}
