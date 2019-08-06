import {Component, OnInit} from '@angular/core';
import {UserLanguage} from '../../models/user-language.model';
import {MatDialog} from '@angular/material';
import {LanguageDialogComponent} from '../language-dialog/language-dialog.component';
import {UserLanguageService} from '../../services/user-language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  userLanguages: UserLanguage[];

  constructor(private dialog: MatDialog,
              private userLanguageService: UserLanguageService) {
  }

  ngOnInit() {
    this.userLanguageService.getAll().subscribe(userLanguages => this.userLanguages = userLanguages);
  }

  openAddLanguageDialog(userLanguage: UserLanguage = null) {
    this.dialog.open(LanguageDialogComponent, {data: userLanguage})
      .afterClosed()
      .subscribe(userLanguages => {
        if (userLanguages) {
          this.userLanguages = userLanguages;
        }
      });
  }

  getClass(userLanguage: UserLanguage) {
    const level = userLanguage.proficiency.level;
    if (!userLanguage.learning) {
      return 'language-disabled';
    }
    switch (level) {
      case 'Basis':
        return 'language-basic';
      case 'Goed':
        return 'language-good';
      case 'Zeer goed':
        return 'language-very-good';
      case 'Moedertaal':
        return 'language-mother';

    }
  }

  get userHasLanguages(): boolean {
    return this.userLanguages && this.userLanguages.length > 0;
  }

}
