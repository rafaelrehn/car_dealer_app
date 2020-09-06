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
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    slideInAnimation,
    trigger('loader', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s ease', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('1s ease', style({opacity: 0}))
      ])
    ])
  ]

})
export class AppComponent {
  title = 'CarDealer';

  constructor(
    public service: ServiceService,
    public router: Router
  ){
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.service.loading = true
    }, 50)
    setTimeout(()=>{
      this.service.loading = false
      setTimeout(()=>{
        this.service.pushListDestaque()
      }, 1000)
    },2000)
  }

  routeLink(url){
    this.router.navigate([url]);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
