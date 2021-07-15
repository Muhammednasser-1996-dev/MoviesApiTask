import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { IMovie } from '../interfaces/movies.interface';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-multi-slider',
  templateUrl: './multi-slider.component.html',
  styleUrls: ['./multi-slider.component.css'],
})
export class MultiSliderComponent implements OnInit {
  @Input() muliSliderList: Observable<IMovie[]>;

  imagePrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor() {}

  ngOnInit(): void {
  }
}
