import {LANGUAGES} from '../../../../mock-data';

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Language} from '../models/language.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Language[]> {
    return of(LANGUAGES);
  }

}
