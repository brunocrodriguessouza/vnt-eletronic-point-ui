import { Observable } from 'rxjs/Observable';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class FileService {

  constructor() { }

  private _data: any;
  public dataUpdated: EventEmitter<any> = new EventEmitter();

    public sendFile(item): Observable<any> {
      return new Observable();
  }

  public set data(value) {
    this._data = value;
    this.dataUpdated.emit(this._data);
  }

  public get data(): any {
    return this._data;
  }

}
