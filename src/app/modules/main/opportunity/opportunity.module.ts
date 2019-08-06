import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OpportunitySeizeDialogComponent} from './components/opportunity-seize-dialog/opportunity-seize-dialog.component';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [OpportunitySeizeDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [OpportunitySeizeDialogComponent],
  entryComponents: [OpportunitySeizeDialogComponent],
})
export class OpportunityModule {
}
