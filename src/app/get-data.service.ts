import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(public _HttpClient:HttpClient) { }

 GetDataTest():Observable<any>{
  return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts')
 }
}
