import { Http, Response } from '@angular/http';
import { AllUserData } from './../../../shared/to/all-user-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(): any {
    return this.http.get('/api/threads')
        .map(res => res.json);
  }

  // ????
  // loadUserThreads(): Observable<AllUserData> {
  //   return this.http.get('/api/threads')
  //       .map(res => res.json);
  // }
}
