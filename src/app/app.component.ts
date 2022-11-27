import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('routeAnim' ,[
      transition(':increment' ,[
        query(':enter, :leave',[
          style({
            position :'absolute',
            top :0,
            left :0,
            width:'100%',
          }),
        ],{optional:true}),
        group([
          query(':leave',[
            animate('200ms ease-in',style({
              opacity: 0,
              transform: 'translateX(-10%)'
            }))
          ],{optional:true}),
          query(':enter',[
            style({
              opacity : 0,
              transform: 'translateX(10%)'
            }),
            animate('250ms 100ms ease-out',style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ],{optional:true})
        ]),
      ]),
      transition(':decrement' ,[
        query(':enter, :leave',[
          style({
            position :'absolute',
            top :0,
            left :0,
            width:'100%',
            height:'100%'
          }),
        ],{optional:true}),
        group([
          query(':leave',[
            animate('200ms ease-in',style({
              opacity: 0,
              transform: 'translateX(10%)'
            }))
          ],{optional:true}),
          query(':enter',[
            style({
              opacity : 0,
              transform: 'translateX(-10%)'
            }),
            animate('250ms 100ms ease-out',style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ],{optional:true})
        ])
      ]),
      transition('* => secondary',[
        query(':enter, :leave',[
          style({
            position :'absolute',
            top :0,
            left :0,
            width:'100%',
            height:'100%'
          }),
        ],{optional:true}),
        group([
          query(':leave',[
            animate('200ms ease-in',style({
              opacity: 0,
              transform: 'scale(0.8)'
            }))
          ],{optional:true}),
          query(':enter',[
            style({
              opacity : 0,
              transform: 'scale(1.2)'
            }),
            animate('250ms 100ms ease-out',style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ],{optional:true})
        ])
      ]),
      transition('secondary => *',[
        query(':enter, :leave',[
          style({
            position :'absolute',
            top :0,
            left :0,
            width:'100%',
            height:'100%'
          }),
        ],{optional:true}),
        group([
          query(':leave',[
            animate('200ms ease-in',style({
              opacity: 0,
              transform: 'scale(1.25)'
            }))
          ],{optional:true}),
          query(':enter',[
            style({
              opacity : 0,
              transform: 'scale(0.8)'
            }),
            animate('250ms 100ms ease-out',style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ],{optional:true})
        ])
      ])
      ]),
      trigger('bgAnim',[
        transition(':leave',[
          animate(1000,style({
            opacity:0,
          }))
        ])
      ]),
      trigger('fadeInAnim',[
        transition(':enter',[
          style({
            opacity:0,
          }),
          animate(250, style({
            opacity:1,
          }))
        ]),
        transition(':leave',[
          animate(250, style({
            opacity:0,
          }))
        ])
      ])
  ]
})
export class AppComponent {
  loadingImg : boolean = false
  background:string[] = ['https://images.unsplash.com/photo-1666410025931-96796794c5e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODg2OTA5NQ&ixlib=rb-4.0.3&q=80&w=1080']
  title = 'angular-dashboard';
  prepareRoute(outlet : RouterOutlet){
    if (outlet.isActivated){
      const tap = outlet.activatedRouteData['tap'];
      if (!tap) return 'secondary'
      return tap
    } 
  }
  async changeBgImg():Promise<any>{
    this.loadingImg = true
    const res = await fetch('https://picsum.photos/1920/1080',{
      method:'GET'
    })
    const alreadyGot = this.background.includes(res.url);
    if(alreadyGot){
      return this.changeBgImg()
    }
    this.background.push(res.url) 
  }

  onBgImgload(img:Event){
    const imgElement = img.target as HTMLImageElement
    const src = imgElement.src
    this.background = this.background.filter(b => b === src)
    console.log(imgElement)
    this.loadingImg = false
  }
}
