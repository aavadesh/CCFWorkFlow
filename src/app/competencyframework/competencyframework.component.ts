import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompetencyFramework } from './class/competencyframewokr';
import { CompetencyframeworkService } from '../services/competencyframework.service';
import { from, Observable, Subscription } from 'rxjs';
import { EmployeecompetencyService } from '../services/employeecompetency.service';

@Component({
  selector: 'app-competencyframework',
  templateUrl: './competencyframework.component.html',
  styleUrls: ['./competencyframework.component.css'],
})
export class CompetencyframeworkComponent implements AfterViewInit {
  dataSource: any;
  displayedColumns: string[] = ['name', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private CrudService: CompetencyframeworkService,
    private employeecompetencyService: EmployeecompetencyService,
    private router: Router, private toastr: ToastrService,
  ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.bindCompetencyFramework();
  }

  // tslint:disable-next-line:typedef
  bindCompetencyFramework() {
    this.CrudService.findAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {}

  deleteClick(id): void {
    this.CrudService.delete(id).subscribe((res) => {
      this.toastr.success('Record Deleted Successfully');
      this.bindCompetencyFramework();
    });
  }

  applyClick(id): void {
    this.employeecompetencyService.findEmployee(1).subscribe((res) => {
      if (res != null)
      {
        this.toastr.error('You have been started to fill one of competency!');
      }
      else
      {
        this.router.navigate(['/competencydetail', id]);
      }
    });
  }

  editClick(id): void {
    this.CrudService.delete(id).subscribe((res) => {
      this.toastr.success('Record Deleted Successfully');
      this.bindCompetencyFramework();
    });
  }
}
