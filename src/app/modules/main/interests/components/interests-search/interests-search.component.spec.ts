import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsSearchComponent } from './interests-search.component';

describe('InterestsSearchComponent', () => {
  let component: InterestsSearchComponent;
  let fixture: ComponentFixture<InterestsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
