import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetencyFrameworkComponent } from './edit-competency-framework.component';

describe('EditCompetencyFrameworkComponent', () => {
  let component: EditCompetencyFrameworkComponent;
  let fixture: ComponentFixture<EditCompetencyFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompetencyFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetencyFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
