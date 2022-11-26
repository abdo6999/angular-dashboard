import { NotificationService } from './../shared/notification-service/notification.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations:[
    trigger('notificationAnim',[
      transition(':enter',[
        style({
          opacity:0,
          transform:'translateY(5px)'
        }),
        animate('150ms ease-out')
      ]),
      transition(':leave',[
        animate(125,style({
          opacity:0,
          transform:'scale(0.85)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  notification !: string | null
  timeOut:any;
  constructor(private serve : NotificationService) { }

  ngOnInit(): void {
    this.serve.notification.subscribe((notification : string)=>{
      this.notification = notification
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.notification = null
      }, 1000);
    })
  }

}
