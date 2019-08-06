import {Injectable} from '@angular/core';
import {UserLanguage} from '../models/user-language.model';
import {of} from 'rxjs';
import {USER_LANGUAGES} from '../../../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class UserLanguageService {

  userLanguages: UserLanguage[] = [];

  constructor() {
    this.userLanguages = USER_LANGUAGES.slice();
  }

  add(userLanguage: UserLanguage) {
    this.userLanguages.push(userLanguage);
    return this.getAll();
  }

  update(userLanguage: UserLanguage) {
    const index = this.userLanguages.findIndex(item => item.id === userLanguage.id);
    this.userLanguages.splice(index, 1, userLanguage);
    return this.getAll();
  }

  delete(userLanguage: UserLanguage) {
    const index = this.userLanguages.findIndex(item => item.id === userLanguage.id);
    this.userLanguages.splice(index, 1);
    return this.getAll();
  }

  getAll() {
    return of(this.userLanguages);
  }

}
