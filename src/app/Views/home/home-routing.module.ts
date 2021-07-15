import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainSliderComponent} from "./main-slider/main-slider.component"
import {DetailsComponent} from "./details/details.component"
import {HomeComponent} from "./home/home.component"
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
