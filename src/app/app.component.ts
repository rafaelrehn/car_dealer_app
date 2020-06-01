import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  stagger,
} from '@angular/animations';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    slideInAnimation
  ]

})
export class AppComponent {
  loading = false
  title = 'CarDealer';

  constructor(
    public router: Router
  ){
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.loading = false
    },1000)
  }

  routeLink(url){
    this.router.navigate([url]);
  }

  resetLoading(){
    this.loading = true
    setTimeout(()=>{
      this.loading = false
    },1000)
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
