import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listModelDestaque = []

  loading = false

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  pushListDestaque(){
    this.listModelDestaque = [
      {id: 0, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false, img: this.sanitizerParser('./assets/img/car0.png')},
      {id: 1, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false, img: this.sanitizerParser('./assets/img/car1.jpg')},
      {id: 2, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false, img: this.sanitizerParser('./assets/img/car2.jpg')},
      {id: 3, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false, img: this.sanitizerParser('./assets/img/car3.jpg')},
      {id: 4, nome: 'Corolla Xei Aut. 2016', valor: 80000, isOpen: false, img: this.sanitizerParser('./assets/img/car4.jpg')},
    ]
  }

  moveRight(model){
    const i = this.listModelDestaque.map(idx=>idx.id).indexOf(model.id)
    this.listModelDestaque.splice(i, 1)
    setTimeout(()=>{
      this.listModelDestaque.unshift(model)  
    })
  }

  moveLeft(model){
    const _model = this.listModelDestaque[0]
    this.listModelDestaque.splice(0, 1)
    setTimeout(()=>{
      this.listModelDestaque.push(_model)
    })
  }

  private sanitizerParser(url){    
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`)
  }
}
