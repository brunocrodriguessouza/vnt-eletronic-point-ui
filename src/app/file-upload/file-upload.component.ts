import { FileService } from './../file.service';
import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public image: Array<any> = [];

  constructor(private fileService: FileService, private http: Http) {

  }

  ngOnInit() {
  }

onUpload(event) {
  console.log(event);
}

fileChange(event) {
    let thisref = this;
    let fileList: FileList = event.target.files;
    
    if (fileList.length > 0) {
        let file: File = fileList[0];
        let formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();

        let fileReader = new FileReader();
        fileReader.readAsText(file, 'ANSI');

       fileReader.onload = function(eventFile) {
          let fileContent = eventFile.currentTarget['result'];
          console.log("fileReader.onload");
          console.log(eventFile);

         /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Headers', 'Text');
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Content-type' , 'application/json;charset=UTF-8');
        headers.append('Accept', 'application/json');
        // headers.append('Accept', 'text');
        const options = new RequestOptions({ headers: headers });
        thisref.http.post('http://staging-enterprise/ApiPonto/api/file', fileContent, options)
             .subscribe(
                 data => {
                    thisref.fileService.data = data.json();
                    console.log(data.json());
                  }
                 ,
                 error => console.log(error)
             );
         };


    }
}

}
