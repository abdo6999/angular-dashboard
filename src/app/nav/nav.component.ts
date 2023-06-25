import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  toggle(el: Array<any>,target:any ) {
    for (let i = 0 ; i < el.length ; i++){
      if (el[i].classList.contains('active') && el[i] !== target){
        el[i].classList.remove('active');
      }
    }
    target.classList.add('active')
  }
}
