import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ListCarsComponent } from './list-cars/list-cars.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage', state: 'home'}},
  { path: 'detalhes', component: CarDetailComponent, data: {animation: 'DetailPage', state: 'detalhes'}},
  { path: 'sobre', component: AboutPageComponent, data: {animation: 'AboutPage', state: 'sobre'}},
  { path: 'estoque', component: ListCarsComponent, data: {animation: 'ItemsPage', state: 'estoque'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
