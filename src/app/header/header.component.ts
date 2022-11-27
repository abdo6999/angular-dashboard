import { Component, OnInit } from '@angular/core';
import { Observable, timer, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dateTime!: Observable<Date>
  constructor() { }

  ngOnInit(): void {
    this.dateTime = timer(0,1000).pipe(
      map(()=>{
        return new Date
      })
      )
  }

}
