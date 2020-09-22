import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetencyFrameworkComponent } from './add-competency-framework.component';

describe('AddCompetencyFrameworkComponent', () => {
  let component: AddCompetencyFrameworkComponent;
  let fixture: ComponentFixture<AddCompetencyFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompetencyFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetencyFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
