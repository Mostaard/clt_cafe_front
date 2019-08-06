import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Proficiency} from '../models/proficiency.model';
import {PROFICIENCIES} from '../../../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProficiencyService {

  constructor() {
  }


  getAll(): Observable<Proficiency[]> {
    return of(PROFICIENCIES);
  }

}
