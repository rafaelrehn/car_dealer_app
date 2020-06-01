import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.router.navigate(['/home'])
    // }, 1000)
  }

}
