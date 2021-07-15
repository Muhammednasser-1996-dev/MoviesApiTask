import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/movies.interface';
import {map} from "rxjs/operators";
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  muliSliderList$: Observable<IMovie[]>;
  mainSliderList$:Observable<IMovie[]>;
  constructor(private _GetDataService: GetDataService) {}

  ngOnInit(): void {

    // Sending Data From Parent Componenet To Child Componenets
    this.muliSliderList$ = this._GetDataService
      .GetToRatedMovies()
      .pipe(map((data) => data.results.slice(0,9)))

    this.mainSliderList$ = this._GetDataService
      .getTrendingMovies()
      .pipe(map((data) => data.results.slice(0,9)))   
  
  }

}
