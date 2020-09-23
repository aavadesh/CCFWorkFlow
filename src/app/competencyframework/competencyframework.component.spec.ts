import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CompetencyframeworkService } from '../services/competencyframework.service';

import { CompetencyframeworkComponent } from './competencyframework.component';

describe('CompetencyframeworkComponent', () => {
  let component: CompetencyframeworkComponent;
  let fixture: ComponentFixture<CompetencyframeworkComponent>;
  // tslint:disable-next-line:prefer-const
  let competencyframeworkService: CompetencyframeworkService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyframeworkComponent ],
      providers: [
        {provide: Router, useValue: {navigate: () => {}}},
        {provide: ActivatedRoute, useValue: {
            params: of({productId: 123})
          }},
        {provide: competencyframeworkService, useValue: {
          findAll: () => of({id: 123, name: 'Product'})
         }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyframeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load product detail', () => {
    spyOn(competencyframeworkService, 'findAll')
    .and
    .callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(competencyframeworkService.findOne).toHaveBeenCalledWith(1);
    expect(component.CompetencyframeworkComponent).toEqual({id: 123, name: 'Product'});
  });
});
