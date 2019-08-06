import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySeizeDialogComponent } from './opportunity-seize-dialog.component';

describe('OpportunitySeizeDialogComponent', () => {
  let component: OpportunitySeizeDialogComponent;
  let fixture: ComponentFixture<OpportunitySeizeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitySeizeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySeizeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
