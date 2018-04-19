import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class FileService {

  constructor() { }

  public data: any;

    public sendFile(item): Observable<any> {
      return new Observable();
    }


}
