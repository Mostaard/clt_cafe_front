import {Component, OnInit} from '@angular/core';
import {MomentService} from '../../services/moment.service';
import {LanguageDialogComponent} from '../../../language/components/language-dialog/language-dialog.component';
import {MatDialog} from '@angular/material';
import {MomentCreateDialogComponent} from '../moment-create-dialog/moment-create-dialog.component';

@Component({
  selector: 'app-user-moments',
  templateUrl: './user-moments.component.html',
  styleUrls: ['./user-moments.component.scss']
})
export class UserMomentsComponent implements OnInit {

  private _moments: Date[];

  constructor(private dialog: MatDialog,
              private momentService: MomentService) {
  }

  get moments(): Date[] {
    return this._moments.slice(0, 5);
  }

  ngOnInit() {
    this.momentService.getUserMoments().subscribe(moments => this._moments = moments);
  }

  get userHasMoments() {
    return this._moments && this._moments.length > 0;
  }

  openAddMomentDialog() {
    this.dialog.open(MomentCreateDialogComponent)
      .afterClosed()
      .subscribe(moments => {
        if (moments) {
          this._moments = moments;
        }
      });

  }

}
