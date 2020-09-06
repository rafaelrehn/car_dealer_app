import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *',[
        query(':enter', [
          style({
            transform: 'perspective(361px) rotateY(22deg)',
            opacity: 0
          }),
          stagger(200, [
            animate('0.7s ease', style({
              transform: 'perspective(361px) rotateY(9deg)',
              opacity: 1
            }))
          ])
        ], { optional: true })
      ])
    ])
  ]
  
})
export class HomeComponent implements OnInit {

  listModel: any[] = null

  constructor(
    private router: Router,
    public service: ServiceService
  ) { 
  }

  ngOnInit(): void {
  } 

  goDetail(id){
    console.log('id', id)
    this.listModel[id].isOpen = true
    setTimeout(()=>{
      this.router.navigate(['/detalhes', { id: id }]);
    }, 500)
  }

  moveRight(model){
    this.service.moveRight(model)
  }

  moveLeft(model){
    this.service.moveLeft(model)
  }

}
