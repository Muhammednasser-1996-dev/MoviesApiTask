import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import SwiperCore from 'swiper/core';
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import { IMovie } from '../interfaces/movies.interface';

//install swiper modules
SwiperCore.use([Navigation, Thumbs]);


@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  @Input() mainSliderList: Observable<IMovie[]>;

  thumbsSwiper: any;

  // MainSliderList:any = []

  imagePrefix:string = "https://image.tmdb.org/t/p/w500/"

  constructor() {
   }

  ngOnInit(): void {
  }


  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
