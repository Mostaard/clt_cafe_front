import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {INTERESTS} from '../../../../mock-data';
import {Interest} from '../models/interest.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor() {
  }

  getAll(): Observable<Interest[]> {
    return of(INTERESTS);
  }

}
