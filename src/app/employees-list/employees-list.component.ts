import { FileService } from './../file.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public rows: Array<any> = [];
  public displayedColumns: Array<any> = [
    'registrationNumber',
    'employeeName',
    'position',
    'costCenter',
  ];

  public displayedColumnsDays: Array<any> = [
    'day',
    'weekDay',
    'code',
    'startTime',
    'endTime'
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;
  public timesheet = new Array();
  private data: MatTableDataSource<any>;
  public selectedRow: any;

  public config: any = {
    paging: true,
    sorting: { columns: this.displayedColumns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.data.filter = filterValue;
  }

  updateRightTable(data) {
    this.selectedRow = data;
    this.timesheet = data.registers;
  }

  public constructor(private fileService: FileService) {
    // this.data = new MatTableDataSource(this.fileService.data);
    this.fileService.dataUpdated.subscribe(response  => this.data = new MatTableDataSource(response));
  }

  public ngOnInit(): void {
  }

}
