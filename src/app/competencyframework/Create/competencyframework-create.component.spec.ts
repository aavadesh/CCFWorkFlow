import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyframeworkCreateComponent } from './competencyframework-create.component';

describe('CompetencyframeworkCreateComponent', () => {
  let component: CompetencyframeworkCreateComponent;
  let fixture: ComponentFixture<CompetencyframeworkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyframeworkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyframeworkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
