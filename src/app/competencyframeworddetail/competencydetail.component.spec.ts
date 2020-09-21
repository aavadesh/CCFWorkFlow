import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencydetailComponent } from './competencydetail.component';

describe('CompetencydetailComponent', () => {
  let component: CompetencydetailComponent;
  let fixture: ComponentFixture<CompetencydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
