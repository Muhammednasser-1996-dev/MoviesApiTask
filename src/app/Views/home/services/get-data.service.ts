import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(public _HttpClient:HttpClient) {}

  getTrendingMovies():Observable<any>
  {
   return  this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=2659e87a68fc082034eb829bd06caab3')
  }

  GetToRatedMovies():Observable<any>{
    return this._HttpClient.get( 'https://api.themoviedb.org/3/movie/top_rated?api_key=0472919ef7fc5963677a38238cc888e2&language=en-US&page=1')
  }

  GetMoviesDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0472919ef7fc5963677a38238cc888e2&language=en-US`)
  }
   
}
