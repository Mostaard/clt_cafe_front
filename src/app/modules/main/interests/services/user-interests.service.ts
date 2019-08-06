import {Injectable} from '@angular/core';
import {Interest} from '../models/interest.model';
import {Observable, of} from 'rxjs';
import {USER_INTERESTS} from '../../../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class UserInterestsService {

  userInterests: Interest[] = [];

  constructor() {
    this.userInterests = USER_INTERESTS.slice();
  }

  add(userInterest: Interest): Observable<Interest[]> {
    if (!this.userInterests.includes(userInterest)) {
      this.userInterests.push(userInterest);
    }
    return this.getAll();
  }

  delete(userInterest: Interest): Observable<Interest[]> {
    const index = this.userInterests.findIndex(item => item.id === userInterest.id);
    this.userInterests.splice(index, 1);
    return this.getAll();
  }


  getAll(): Observable<Interest[]> {
    return of(this.userInterests);
  }

}
