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

  public constructor() {
    this.data = new MatTableDataSource([
   {
      "registrationNumber":"1427 - 7",
      "employeeName":"ALISSON NARJARIO QUEIROGA DINI",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:18",
            "endTime":"16:13 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"16:53 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"06:43",
            "endTime":"16:31 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:53 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:52 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"16:52 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:53 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:23",
            "endTime":"16:23 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"06:43",
            "endTime":"16:51 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"06:51",
            "endTime":"16:15 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:22",
            "endTime":"16:54 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:23",
            "endTime":"16:52 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"06:46",
            "endTime":"16:01 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:27",
            "endTime":"16:51 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:26",
            "endTime":"16:52 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:50 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:24",
            "endTime":"16:51 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"06:43",
            "endTime":"16:51 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:36",
            "endTime":"16:50 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:23",
            "endTime":"14:23 "
         }
      ]
   },
   {
      "registrationNumber":"1291 - 6",
      "employeeName":"ANDRE DE SANTIS TORTOLANO",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"06:34",
            "endTime":"20:22 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:03",
            "endTime":"15:08 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:38 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:35 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:34 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:46 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:11",
            "endTime":"16:34 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:41",
            "endTime":"16:35 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:47 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:13",
            "endTime":"17:50 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:24",
            "endTime":"18:11 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:03",
            "endTime":"16:41 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:02",
            "endTime":"20:22 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"06:39",
            "endTime":"16:21 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"16:44 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:31",
            "endTime":"18:27 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"15:42 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:04",
            "endTime":"16:34 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"06:41",
            "endTime":"16:17 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:01",
            "endTime":"18:22 "
         }
      ]
   },
   {
      "registrationNumber":"1111 - 1",
      "employeeName":"CARLOS ALBERTO LEME GALASSI",
      "position":"GERENTE DE PROJETOS",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:29",
            "endTime":"18:44 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:57",
            "endTime":"17:33 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:33",
            "endTime":"17:54 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:02",
            "endTime":"17:30 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:36",
            "endTime":"17:50 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:45",
            "endTime":"17:26 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:38",
            "endTime":"16:51 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:46",
            "endTime":"17:31 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:49",
            "endTime":"17:29 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:44",
            "endTime":"18:48 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:47",
            "endTime":"17:39 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:36",
            "endTime":"17:38 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:43",
            "endTime":"17:30 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:45",
            "endTime":"17:26 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:40",
            "endTime":"18:43 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:44",
            "endTime":"17:14 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:37",
            "endTime":"17:46 "
         }
      ]
   },
   {
      "registrationNumber":"1315 - 7",
      "employeeName":"DANIELLE RAMOS TONHAI",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:44",
            "endTime":"17:13 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:36",
            "endTime":"16:47 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"17:00 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:53",
            "endTime":"17:16 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:46",
            "endTime":"16:50 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:12",
            "endTime":"17:28 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:41",
            "endTime":"16:49 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:37",
            "endTime":"16:50 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:59",
            "endTime":"16:56 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:24",
            "endTime":"16:50 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:37",
            "endTime":"17:07 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:35",
            "endTime":"16:51 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:38",
            "endTime":"17:10 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:37",
            "endTime":"17:23 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:41",
            "endTime":"17:00 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:46",
            "endTime":"17:15 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:39",
            "endTime":"16:48 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:46 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:46",
            "endTime":"17:00 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:42",
            "endTime":"16:44 "
         }
      ]
   },
   {
      "registrationNumber":"1214 - 2",
      "employeeName":"ERICA BAPTISTELLA GIOVANETTI T",
      "position":"ANALISTA DE PROJETOS",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:49 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:17",
            "endTime":"16:48 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:35",
            "endTime":"16:51 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:20",
            "endTime":"16:50 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:27",
            "endTime":"16:44 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:50 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:41",
            "endTime":"16:05 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:38",
            "endTime":"16:39 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:34",
            "endTime":"16:43 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:49 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:26",
            "endTime":"16:41 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:50",
            "endTime":"15:31 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:18",
            "endTime":"16:48 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:46 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:32",
            "endTime":"16:48 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:43 "
         }
      ]
   },
   {
      "registrationNumber":"1280 - 0",
      "employeeName":"FABIANA FERREIRA PERES",
      "position":"ANALISTA DE TESTES P",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:22",
            "endTime":"16:55 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:34",
            "endTime":"16:49 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:41",
            "endTime":"16:42 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:56",
            "endTime":"19:26 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:41",
            "endTime":"16:50 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:45 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:31",
            "endTime":"16:46 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:16",
            "endTime":"16:32 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:37",
            "endTime":"16:45 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:20",
            "endTime":"16:46 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:35",
            "endTime":"16:48 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"17:14 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:08",
            "endTime":"16:45 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:35",
            "endTime":"16:44 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:54",
            "endTime":"16:43 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:13",
            "endTime":"16:46 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:08",
            "endTime":"16:30 "
         }
      ]
   },
   {
      "registrationNumber":"1325 - 4",
      "employeeName":"FELIPPE DAPOLLO FERREIRA",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"16:49 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:51 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:31",
            "endTime":"16:48 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"16:49 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:27",
            "endTime":"16:47 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:27",
            "endTime":"16:46 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:34 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:51 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:15",
            "endTime":"16:50 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:24",
            "endTime":"16:48 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:49 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"16:51 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"16:48 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"16:49 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"16:50 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"16:49 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:32",
            "endTime":"16:47 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"16:50 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:26",
            "endTime":"16:51 "
         }
      ]
   },
   {
      "registrationNumber":"1444 - 7",
      "employeeName":"FLAVIA BOTTEGA LICHTI",
      "position":"ANALISTA DE TESTES P",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:54",
            "endTime":"17:40 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:43",
            "endTime":"17:25 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:33",
            "endTime":"13:33 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:22",
            "endTime":"17:14 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:19",
            "endTime":"16:56 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:16",
            "endTime":"17:00 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:44",
            "endTime":"17:19 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:20",
            "endTime":"17:02 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:44",
            "endTime":"17:04 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:56",
            "endTime":"17:09 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"16:58 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:48",
            "endTime":"17:07 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:51",
            "endTime":"17:12 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:59",
            "endTime":"17:17 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:51",
            "endTime":"16:58 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:42",
            "endTime":"16:58 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:53",
            "endTime":"16:57 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:51",
            "endTime":"17:05 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:54",
            "endTime":"17:05 "
         }
      ]
   },
   {
      "registrationNumber":"1223 - 1",
      "employeeName":"GIANE GIANOTTO FERNANDES",
      "position":"ANALISTA DE TESTES J",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:00",
            "endTime":"17:55 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:28",
            "endTime":"18:33 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:12",
            "endTime":"18:01 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:32",
            "endTime":"17:42 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:54",
            "endTime":"14:10 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:56",
            "endTime":"18:22 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:51",
            "endTime":"18:32 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:34",
            "endTime":"17:20 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:02",
            "endTime":"18:36 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:38",
            "endTime":"18:02 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:23",
            "endTime":"18:29 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:44",
            "endTime":"18:23 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:36",
            "endTime":"17:29 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:01",
            "endTime":"18:02 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:02",
            "endTime":"19:46 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:39",
            "endTime":"17:33 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:10",
            "endTime":"18:43 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:38",
            "endTime":"17:21 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:14",
            "endTime":"18:38 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:16",
            "endTime":"18:55 "
         }
      ]
   },
   {
      "registrationNumber":"1398 - 0",
      "employeeName":"GUSTAVO FREITAS VILELA",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:57",
            "endTime":"16:40 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"16:51 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:23",
            "endTime":"16:48 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:26",
            "endTime":"16:49 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:21",
            "endTime":"16:48 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:23",
            "endTime":"16:51 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:26",
            "endTime":"16:48 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"16:52 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"16:51 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:23",
            "endTime":"16:48 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:51 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:22",
            "endTime":"16:51 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"16:50 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"16:49 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:22",
            "endTime":"16:51 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:27",
            "endTime":"16:48 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"06:43",
            "endTime":"15:44 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:37",
            "endTime":"16:48 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:25",
            "endTime":"16:49 "
         }
      ]
   },
   {
      "registrationNumber":"1518 - 6",
      "employeeName":"LUCAS BORDINI RIBEIRO DE ARAUJ",
      "position":"ASSISTENTE TECNICO",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:58",
            "endTime":"18:03 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:39",
            "endTime":"16:52 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"09:35",
            "endTime":"16:37 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:12",
            "endTime":"16:41 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:27",
            "endTime":"18:49 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:21",
            "endTime":"18:48 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:26",
            "endTime":"18:49 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:24",
            "endTime":"18:20 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:35",
            "endTime":"19:30 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:15",
            "endTime":"19:23 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:15",
            "endTime":"18:56 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:30",
            "endTime":"19:01 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:29",
            "endTime":"16:27 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:11",
            "endTime":"18:51 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:33",
            "endTime":"18:37 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:38",
            "endTime":"18:34 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"06:57",
            "endTime":"16:36 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:11",
            "endTime":"18:48 "
         }
      ]
   },
   {
      "registrationNumber":"471 - 9",
      "employeeName":"LUCIANO SUMIYOSHI",
      "position":"ANALISTA DE TESTES S",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"10:02",
            "endTime":"16:27 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:39",
            "endTime":"17:44 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:29",
            "endTime":"17:48 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:22",
            "endTime":"18:36 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:32",
            "endTime":"18:06 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:29",
            "endTime":"18:03 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"13:38",
            "endTime":"17:57 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:35",
            "endTime":"17:35 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"10",
            "weekDay":"Sab",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"11",
            "weekDay":"Dom",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"17",
            "weekDay":"Sab",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"18",
            "weekDay":"Dom",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:15",
            "endTime":"18:07 "
         }
      ]
   },
   {
      "registrationNumber":"95189 - 2",
      "employeeName":"MARCELO FERNANDES DE JESUS",
      "position":"ESTAGIARIO TEC",
      "costCenter":"EP400A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0170",
            "startTime":"07:27",
            "endTime":"14:30 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0170",
            "startTime":"07:18",
            "endTime":"14:28 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0170",
            "startTime":"07:24",
            "endTime":"14:30 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0170",
            "startTime":"09:22",
            "endTime":"16:50 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0170",
            "startTime":"10:07",
            "endTime":"16:52 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0170",
            "startTime":"10:02",
            "endTime":"16:52 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0170",
            "startTime":"10:16",
            "endTime":"16:53 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0170",
            "startTime":"07:35",
            "endTime":"14:30 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0170",
            "startTime":"10:15",
            "endTime":"16:51 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0170",
            "startTime":"10:34",
            "endTime":"16:49 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0170",
            "startTime":"09:59",
            "endTime":"16:52 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0170",
            "startTime":"10:11",
            "endTime":"16:52 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0170",
            "startTime":"07:22",
            "endTime":"14:31 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0170",
            "startTime":"07:26",
            "endTime":"14:30 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0170",
            "startTime":"10:08",
            "endTime":"16:51 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0170",
            "startTime":"10:09",
            "endTime":"16:50 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0170",
            "startTime":"11:37",
            "endTime":"16:51 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0170",
            "startTime":"07:26",
            "endTime":"13:51 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0170",
            "startTime":"10:55",
            "endTime":"16:50 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0170",
            "startTime":"10:08",
            "endTime":"16:48 "
         }
      ]
   },
   {
      "registrationNumber":"1368 - 8",
      "employeeName":"MAURICIO JUNIO MOURA MENDES",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"11:15",
            "endTime":"18:49 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:06",
            "endTime":"21:17 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:37",
            "endTime":"17:44 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:19",
            "endTime":"18:48 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:18",
            "endTime":"18:57 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:21",
            "endTime":"18:45 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:56",
            "endTime":"19:04 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:41",
            "endTime":"17:22 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:20",
            "endTime":"19:19 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:04",
            "endTime":"20:16 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"11:14",
            "endTime":"19:18 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:06",
            "endTime":"19:06 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:19",
            "endTime":"19:08 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:06",
            "endTime":"19:43 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:59",
            "endTime":"18:37 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:03",
            "endTime":"18:45 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:06",
            "endTime":"19:09 "
         }
      ]
   },
   {
      "registrationNumber":"95191 - 4",
      "employeeName":"PEDRO MAGLIO MENDES",
      "position":"ESTAGIARIO TEC",
      "costCenter":"EP400A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0170",
            "startTime":"07:30",
            "endTime":"14:30 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0170",
            "startTime":"07:28",
            "endTime":"14:28 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0170",
            "startTime":"07:29",
            "endTime":"14:30 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"03",
            "weekDay":"Sab",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"04",
            "weekDay":"Dom",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0170",
            "startTime":"07:30",
            "endTime":"14:30 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0170",
            "startTime":"07:29",
            "endTime":"14:31 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0170",
            "startTime":"07:28",
            "endTime":"14:28 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0170",
            "startTime":"07:26",
            "endTime":"14:30 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0170",
            "startTime":"09:33",
            "endTime":"16:47 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0170",
            "startTime":"07:27",
            "endTime":"14:31 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0170",
            "startTime":"07:30",
            "endTime":"14:31 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0170",
            "startTime":"07:30",
            "endTime":"14:31 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0170",
            "startTime":"07:31",
            "endTime":"14:27 "
         }
      ]
   },
   {
      "registrationNumber":"1038 - 7",
      "employeeName":"RENATO ANTONIO SCARPARI JUNIOR",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:08",
            "endTime":"17:32 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:04",
            "endTime":"19:33 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"09:03",
            "endTime":"18:35 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:14",
            "endTime":"19:10 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:56",
            "endTime":"20:21 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:43",
            "endTime":"19:59 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:59",
            "endTime":"16:37 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:15",
            "endTime":"20:19 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"08:20",
            "endTime":"20:33 "
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:04",
            "endTime":"19:56 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:57",
            "endTime":"20:02 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"09:07",
            "endTime":"19:43 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:12",
            "endTime":"19:10 "
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:03",
            "endTime":"16:33 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:23",
            "endTime":"18:32 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"09:16",
            "endTime":"16:29 "
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"09:08",
            "endTime":"16:25 "
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:02",
            "endTime":"16:39 "
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"09:04",
            "endTime":"18:31 "
         }
      ]
   },
   {
      "registrationNumber":"1071 - 9",
      "employeeName":"ROGERIO DE OLIVEIRA",
      "position":"ANALISTA DE TESTES S",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:18",
            "endTime":"16:47 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:10",
            "endTime":"16:03 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:22",
            "endTime":"16:50 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:05",
            "endTime":"16:43 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:14",
            "endTime":"16:47 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"13:52",
            "endTime":"19:58 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:07",
            "endTime":"16:38 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:33",
            "endTime":"16:48 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"07",
            "weekDay":"Qua",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"10",
            "weekDay":"Sab",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"11",
            "weekDay":"Dom",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"13",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"17",
            "weekDay":"Sab",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"18",
            "weekDay":"Dom",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         }
      ]
   },
   {
      "registrationNumber":"1187 - 1",
      "employeeName":"VICTOR GABRIEL DE SOUZA",
      "position":"ANALISTA DE DESENVOL",
      "costCenter":"EP500A12",
      "registers":[
         {
            "day":"21",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"07:30",
            "endTime":"16:53 "
         },
         {
            "day":"22",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"08:31",
            "endTime":"17:20 "
         },
         {
            "day":"23",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"08:36",
            "endTime":"18:14 "
         },
         {
            "day":"26",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"16:50 "
         },
         {
            "day":"27",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:27",
            "endTime":"16:52 "
         },
         {
            "day":"28",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"09:10",
            "endTime":"19:01 "
         },
         {
            "day":"01",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"07:27",
            "endTime":"16:52 "
         },
         {
            "day":"02",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"06:56",
            "endTime":"16:34 "
         },
         {
            "day":"05",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"09:01",
            "endTime":"18:00 "
         },
         {
            "day":"06",
            "weekDay":"Ter",
            "code":"0200",
            "startTime":"07:24",
            "endTime":"17:08 "
         },
         {
            "day":"08",
            "weekDay":"Qui",
            "code":"0200",
            "startTime":"06:51",
            "endTime":"17:02 "
         },
         {
            "day":"09",
            "weekDay":"Sex",
            "code":"0200",
            "startTime":"07:28",
            "endTime":"16:51 "
         },
         {
            "day":"12",
            "weekDay":"Seg",
            "code":"0200",
            "startTime":"08:46",
            "endTime":"18:30 "
         },
         {
            "day":"14",
            "weekDay":"Qua",
            "code":"0200",
            "startTime":"08:00",
            "endTime":"17:17 "
         },
         {
            "day":"15",
            "weekDay":"Qui",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"16",
            "weekDay":"Sex",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"17",
            "weekDay":"Sab",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"18",
            "weekDay":"Dom",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"19",
            "weekDay":"Seg",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         },
         {
            "day":"20",
            "weekDay":"Ter",
            "code":"FERIAS",
            "startTime":null,
            "endTime":null
         }
      ]
   }
]);

  }

  public ngOnInit(): void {
  }

}
