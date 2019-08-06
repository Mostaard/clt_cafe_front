import {Component, Inject, OnInit} from '@angular/core';
import {UserLanguage} from '../../models/user-language.model';
import {LanguageService} from '../../services/language.service';
import {Language} from '../../models/language.model';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Proficiency} from '../../models/proficiency.model';
import {ProficiencyService} from '../../services/proficiency.service';
import {UserLanguageService} from '../../services/user-language.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.scss']
})
export class LanguageDialogComponent implements OnInit {

  filterLanguages: Observable<Language[]>;
  proficiencies: Observable<Proficiency[]>;
  languages: Language[];

  editMode = false;
  userLanguage = new UserLanguage();
  languageControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<LanguageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: UserLanguage,
    private languageService: LanguageService,
    private proficiencyService: ProficiencyService,
    private userLanguageService: UserLanguageService) {
  }

  ngOnInit() {
    this.languageControl = new FormControl('', this.validateLanguage);
    this.languageService.getAll().subscribe(languages => {
      this.languages = languages;
      this.filterLanguages = this.languageControl.valueChanges
        .pipe(
          startWith<string | Language>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.languages.slice()));
    });
    this.proficiencies = this.proficiencyService.getAll();

    if (this.data) {
      this.userLanguage.proficiency = this.data.proficiency;
      this.userLanguage.id = this.data.id;
      this.userLanguage.learning = this.data.learning;
      this.userLanguage.language = this.data.language;
      this.languageControl.setValue(this.userLanguage.language);
      this.editMode = true;
    }

  }

  save() {
    this.userLanguage.language = this.languageControl.value;
    if (this.editMode) {
      this.userLanguageService.update(this.userLanguage).subscribe(userLanguages => this.dialogRef.close(userLanguages));
    } else {
      this.userLanguageService.add(this.userLanguage).subscribe(userLanguages => this.dialogRef.close(userLanguages));
    }
  }

  delete() {
    this.userLanguage.language = this.languageControl.value;
    this.userLanguageService.delete(this.userLanguage).subscribe(userLanguages => this.dialogRef.close(userLanguages));
  }

  get userLanguageValid() {
    return this.userLanguage.proficiency && this.languages.includes(this.languageControl.value);
  }

  languageDisplay(language?: Language): string | undefined {
    return language ? language.name : undefined;
  }

  private _filter(value: string): Language[] {
    const filterValue = value.toLowerCase();
    return this.languages.filter(language => language.name.toLowerCase().includes(filterValue));
  }

  validateLanguage(control: FormControl) {
    if (this && this.languages) {
      if (!this.languages.includes(control.value)) {
        return {
          validateLanguage: {
            valid: false
          }
        };
      }
      return null;
    }
  }
}
