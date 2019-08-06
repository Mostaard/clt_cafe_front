import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserMomentsComponent} from './components/user-moments/user-moments.component';
import {MaterialModule} from '../../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MomentCreateDialogComponent} from './components/moment-create-dialog/moment-create-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    UserMomentsComponent,
    MomentCreateDialogComponent
  ],
  exports: [UserMomentsComponent],
  entryComponents: [MomentCreateDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    RouterModule,

  ]
})
export class MomentsModule {
}
