import {Component, OnInit} from '@angular/core';
import {Interest} from '../../models/interest.model';
import {UserInterestsService} from '../../services/user-interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  userInterests: Interest[];
  selectedInterest: Interest;

  constructor(private userInterestService: UserInterestsService) {
  }

  ngOnInit() {
    this.userInterestService.getAll().subscribe(userInterests => this.userInterests = userInterests);
  }

  get userHasInterests(): boolean {
    return this.userInterests && this.userInterests.length > 0;
  }

  addInterest(interest: Interest) {
    this.userInterestService.add(interest).subscribe(userInterests => this.userInterests = userInterests);
  }

  select(interest: Interest) {
    this.selectedInterest = interest !== this.selectedInterest ? interest : null;
    console.log(this.selectedInterest);
  }

  delete() {
    this.userInterestService.delete(this.selectedInterest).subscribe(interests => this.userInterests = interests);
  }
}
