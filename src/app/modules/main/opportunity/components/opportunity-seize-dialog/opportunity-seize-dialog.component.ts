import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Opportunity} from '../../models/opportunity.model';

@Component({
  selector: 'app-opportunity-seize-dialog',
  templateUrl: './opportunity-seize-dialog.component.html',
  styleUrls: ['./opportunity-seize-dialog.component.scss']
})
export class OpportunitySeizeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OpportunitySeizeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private opportunity: Opportunity,) {
  }

  ngOnInit() {
    console.log(this.opportunity);
  }

  sendRequest() {

  }

}
