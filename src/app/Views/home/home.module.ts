import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MultiSliderComponent } from './multi-slider/multi-slider.component';
import { HomeComponent } from './home/home.component';
import {SwiperModule } from 'swiper/angular'
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    MainSliderComponent,
    MultiSliderComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    HttpClientModule,
  ]
})
export class HomeModule {

 }
