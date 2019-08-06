import {Injectable} from '@angular/core';
import {MATCHES} from '../../../../mock-data';
import {Observable, of} from 'rxjs';
import {Opportunity} from '../models/opportunity.model';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor() {
  }

  getAll(from: Date, until: Date): Observable<Opportunity[]> {
    return of(MATCHES);
  }


}
