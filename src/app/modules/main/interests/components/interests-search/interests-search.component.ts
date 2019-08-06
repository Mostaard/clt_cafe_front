import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InterestsService} from '../../services/interests.service';
import {Interest} from '../../models/interest.model';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Language} from '../../../language/models/language.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-interests-search',
  templateUrl: './interests-search.component.html',
  styleUrls: ['./interests-search.component.scss']
})
export class InterestsSearchComponent implements OnInit {

  filterInterests: Observable<Interest[]>;
  interests: Interest[];
  interestControl: FormControl;

  @Output() selectInterest = new EventEmitter<Interest>();


  constructor(private interestsService: InterestsService) {
  }

  ngOnInit() {
    this.interestControl = new FormControl('');
    this.interestsService.getAll().subscribe(interests => {
      this.interests = interests;
      this.filterInterests = this.interestControl.valueChanges
        .pipe(
          startWith<string | Language>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.interests.slice()));
    });

  }

  interestValid(): boolean {
    if (this.interests) {
      return this.interests.includes(this.interestControl.value);
    }
    return false;
  }

  select() {
    this.selectInterest.emit(this.interestControl.value);
    this.interestControl.setValue('');
  }

  interestDisplay(interest?: Interest): string | undefined {
    return interest ? interest.name : undefined;
  }


  private _filter(value: string): Interest[] {
    const filterValue = value.toLowerCase();
    return this.interests.filter(interest => interest.name.toLowerCase().includes(filterValue));
  }


}
