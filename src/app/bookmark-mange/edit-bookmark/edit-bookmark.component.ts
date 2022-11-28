import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map ,mergeMap,tap} from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/bookmark-service/bookmark.model';
import { BookmarkService } from 'src/app/shared/bookmark-service/bookmark.service';
import { NotificationService } from 'src/app/shared/notification-service/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {
  bookmark!:Bookmark;
  constructor(private notifserve:NotificationService,private serve : BookmarkService , private activatedRoute : ActivatedRoute ,private router : Router,) { }
  ngOnInit(): void {
    const id =  this.activatedRoute.firstChild?.snapshot.params['id']
      this.bookmark = this.serve.getBookmark(id!)
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap((route) => route.paramMap),
      tap(
        paramMap =>  paramMap
      )
    ).subscribe((paramAsMap) => {
      const idPram = paramAsMap.get('id');
      this.bookmark = this.serve.getBookmark(idPram!)
    })
  }

  onFormsubmit(input : NgForm ){
    
    try {
      if (input.value.title) {
        const {title,url} = input.value
        this.serve.updateBookmark(this.bookmark.id,{
          title,
          url:new URL(url)
        })
        this.router.navigateByUrl('bookmarks/mange')
        this.notifserve.show('bookmark Updated Successfully')
      }
    } catch (error) {
      
    }
  }
  delete(form:NgForm){
    try {
        this.serve.deleteBookmark(this.bookmark.id);
        this.router.navigateByUrl('bookmarks/mange')
        this.notifserve.show('bookmark Deleted Successfully')
    } catch (error) {
        this.router.navigateByUrl('bookmarks')
    }
  }
}
