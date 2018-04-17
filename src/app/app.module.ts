import { FileService } from './file.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatFileUploadModule } from 'angular-material-fileupload';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesListComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    HttpModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFileUploadModule
  ],
  providers: [
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
