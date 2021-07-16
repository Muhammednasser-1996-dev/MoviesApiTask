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

  // Recieving Data From Parent componenet
  @Input() mainSliderList: Observable<IMovie[]>;

  thumbsSwiper: any;

  // Add Static Path For images to concat with Dynamic Path from api
  imagePrefix:string = "https://image.tmdb.org/t/p/w500/"

  constructor() {
   }

  ngOnInit(): void {
  }

  // functions in swiper js to fire the library
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
