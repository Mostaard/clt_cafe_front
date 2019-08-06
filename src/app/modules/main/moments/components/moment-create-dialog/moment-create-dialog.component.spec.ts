import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentCreateDialogComponent } from './moment-create-dialog.component';

describe('MomentCreateDialogComponent', () => {
  let component: MomentCreateDialogComponent;
  let fixture: ComponentFixture<MomentCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
