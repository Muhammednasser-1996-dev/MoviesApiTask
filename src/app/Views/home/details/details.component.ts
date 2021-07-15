import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {GetDataService} from "../services/get-data.service";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;

errVisibility = false

moviesDetails:any;

imagePrefix:string = "https://image.tmdb.org/t/p/w500/"

  constructor(_ActivatedRoute:ActivatedRoute,_GetDataService:GetDataService) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id')

    _GetDataService.GetMoviesDetails(this.id).subscribe(
    (data) => {
      console.log(data)
      this.moviesDetails = data;
      this.errVisibility =true
    }
  )
   }

  ngOnInit(): void {
  }

}
