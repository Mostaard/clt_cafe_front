import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoments } from './user-moments.component';

describe('UserMoments', () => {
  let component: UserMoments;
  let fixture: ComponentFixture<UserMoments>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMoments ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
