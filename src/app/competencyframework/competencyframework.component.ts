import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompetencyFramework } from './class/competencyframewokr';
import { CompetencyframeworkService } from '../services/competencyframework.service';
import { from, Observable, Subscription } from 'rxjs';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bindCompetencyFramework();
  }

  bindCompetencyFramework() {
    this.CrudService.findAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {}
}
