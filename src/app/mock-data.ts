import {UserLanguage} from './modules/main/language/models/user-language.model';
import {Language} from './modules/main/language/models/language.model';
import {Proficiency} from './modules/main/language/models/proficiency.model';
import {Interest} from './modules/main/interests/models/interest.model';
import {Opportunity} from './modules/main/opportunity/models/opportunity.model';

export const LANGUAGES: Language[] = [
  {id: 0, name: 'Afrikaans'},
  {id: 1, name: 'Arabisch'},
  {id: 2, name: 'Bulgaars'},
  {id: 3, name: 'Chinees'},
  {id: 4, name: 'Deens'},
  {id: 5, name: 'Duits'},
  {id: 6, name: 'Engels'},
  {id: 7, name: 'Fins'},
  {id: 8, name: 'Frans'},
  {id: 9, name: 'Grieks'},
  {id: 10, name: 'Hebreeuws'},
  {id: 11, name: 'Hongaars'},
  {id: 12, name: 'Italiaans'},
  {id: 13, name: 'Japans'},
  {id: 14, name: 'Nederlands'},
  {id: 15, name: 'Noors'},
  {id: 16, name: 'Pools'},
  {id: 17, name: 'Portugees'},
  {id: 18, name: 'Roemeens'},
  {id: 19, name: 'Russisch'},
  {id: 20, name: 'Spaans'},
  {id: 21, name: 'Turks'},
  {id: 22, name: 'Zweeds'},
];

export const PROFICIENCIES: Proficiency[] = [
  {id: 0, level: 'Basis'},
  {id: 1, level: 'Goed'},
  {id: 2, level: 'Zeer goed'},
  {id: 3, level: 'Moedertaal'},
];

export const USER_LANGUAGES: UserLanguage[] = [
  {id: 0, language: LANGUAGES[3], learning: true, proficiency: PROFICIENCIES[1]},
  {id: 1, language: LANGUAGES[6], learning: true, proficiency: PROFICIENCIES[2]},
  {id: 2, language: LANGUAGES[14], learning: true, proficiency: PROFICIENCIES[3]},
  {id: 3, language: LANGUAGES[12], learning: true, proficiency: PROFICIENCIES[0]},
  {id: 4, language: LANGUAGES[9], learning: true, proficiency: PROFICIENCIES[0]},
];


export const INTERESTS: Interest[] = [
  {id: 0, name: 'Acteren'},
  {id: 1, name: 'Astronomie'},
  {id: 2, name: 'Radio'},
  {id: 3, name: 'Dieren'},
  {id: 4, name: 'Fietsen'},
  {id: 5, name: 'Bloggen'},
  {id: 6, name: 'Calligrafie'},
  {id: 7, name: 'Koken'},
  {id: 8, name: 'Schrijven'},
  {id: 9, name: 'Puzzels'},
  {id: 10, name: 'Meditatie'},
  {id: 11, name: 'Muziek'},
  {id: 12, name: 'Schilderen'},
  {id: 13, name: 'Kunst'},
  {id: 14, name: 'Tekenen'},
  {id: 15, name: 'Tennis'},
  {id: 16, name: 'Voetbal'},
  {id: 17, name: 'Yoga'},
  {id: 18, name: 'Vrijwilligerswerk'},
  {id: 19, name: 'Reizen'},
  {id: 20, name: 'Gevechtsport'},
  {id: 21, name: 'Computers'},
  {id: 22, name: 'Lezen'},
  {id: 23, name: 'Theater'},
  {id: 24, name: 'Filosofie'},
  {id: 25, name: 'Tuinieren'},
];

export const USER_INTERESTS: Interest[] = [
  INTERESTS[7],
  INTERESTS[23],
  INTERESTS[13],
];

export const USER_MOMENTS: Date[] = [
  new Date(2019, 4, 23, 10),
  new Date(2019, 4, 24, 12),
  new Date(2019, 4, 25, 9),
  new Date(2019, 4, 25, 10),
  new Date(2019, 4, 25, 12),
  new Date(2019, 4, 28, 12),
  new Date(2019, 4, 29, 13),
  new Date(2019, 4, 30, 9),
];


export const MATCHES: Opportunity[] = [
  {id: 0, moment: USER_MOMENTS[0], percentage: 0.4},
  {id: 0, moment: USER_MOMENTS[1], percentage: 0.75},
  {id: 0, moment: USER_MOMENTS[2], percentage: 0.3},
  {id: 0, moment: USER_MOMENTS[3], percentage: 0.2},
  {id: 0, moment: USER_MOMENTS[4], percentage: 0.84},
  {id: 0, moment: USER_MOMENTS[5], percentage: 0.66},
  {id: 0, moment: USER_MOMENTS[6], percentage: 0.43},
  {id: 0, moment: USER_MOMENTS[7], percentage: 0.9},
];


