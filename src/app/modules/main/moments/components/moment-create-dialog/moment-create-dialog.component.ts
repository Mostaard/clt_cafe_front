import {Component, OnInit} from '@angular/core';
import {MomentService} from '../../services/moment.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-moment-create-dialog',
  templateUrl: './moment-create-dialog.component.html',
  styleUrls: ['./moment-create-dialog.component.scss']
})
export class MomentCreateDialogComponent implements OnInit {

  date: Date;
  time: string;

  constructor(public dialogRef: MatDialogRef<MomentCreateDialogComponent>,
              private momentService: MomentService) {

  }

  ngOnInit() {
  }

  get momentValid(): boolean {
    return !!this.date && !!this.time;
  }

  save() {
    const timeArray = this.time.split(':');
    this.date.setHours(Number(timeArray[0]), Number(timeArray[1]));
    this.momentService.add(this.date).subscribe(moments => this.dialogRef.close(moments));
  }

}
