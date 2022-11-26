import { Bookmark } from './../shared/bookmark-service/bookmark.model';
import { BookmarkService } from './../shared/bookmark-service/bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  Bookmarks!:Bookmark[];
  constructor(private serve:BookmarkService) { }
  ngOnInit(): void {
    this.Bookmarks = this.serve.getBookmarks()
  }
  trackById(index:any,item:Bookmark){
    return item.id
  }
}
