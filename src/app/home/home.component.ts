import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openValor', [
      // ...
      state('open', style({
        width: '100%'
      })),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openNome', [
      // ...
      state('open', style({
        color: 'yellow'
      })),
      transition('* => open', [
        // animate('0.5s')
      ]),
    ]),
  ],
  
})
export class HomeComponent implements OnInit {

  listModel = [
    {id: 0, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false},
    {id: 1, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false},
    {id: 2, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false},
    {id: 3, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false},
    {id: 4, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false},
    {id: 5, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false},
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goDetail(id){
    console.log('id', id)
    this.listModel[id].isOpen = true
    setTimeout(()=>{
      this.router.navigate(['/detalhes', { id: id }]);
    }, 500)
  }

}
