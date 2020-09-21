import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyframeworkComponent } from './competencyframework.component';

describe('CompetencyframeworkComponent', () => {
  let component: CompetencyframeworkComponent;
  let fixture: ComponentFixture<CompetencyframeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyframeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyframeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
