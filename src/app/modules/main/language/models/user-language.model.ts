import {Language} from './language.model';
import {Proficiency} from './proficiency.model';

export class UserLanguage {
  id?: number;
  language?: Language;
  learning: boolean;
  proficiency?: Proficiency;

  constructor() {
    this.learning = false;
  }

}
