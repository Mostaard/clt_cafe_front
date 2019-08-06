import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {USER_MOMENTS} from '../../../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private userMoments: Date[];

  constructor() {
    this.userMoments = USER_MOMENTS.slice();
  }

  getUserMoments(): Observable<Date[]> {
    this.userMoments.sort();
    return of(this.userMoments);
  }

  add(moment: Date): Observable<Date[]> {
    this.userMoments.push(moment);
    this.userMoments.sort(function(a, b) {
      return a.getTime() - b.getTime();
    });
    return of(this.userMoments);
  }


}
