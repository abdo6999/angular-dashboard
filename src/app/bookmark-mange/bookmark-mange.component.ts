import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark-service/bookmark.model';
import { BookmarkService } from '../shared/bookmark-service/bookmark.service';

@Component({
  selector: 'app-bookmark-mange',
  templateUrl: './bookmark-mange.component.html',
  styleUrls: ['./bookmark-mange.component.scss']
})
export class BookmarkMangeComponent implements OnInit {

  Bookmarks!:Bookmark[];
  constructor(private serve:BookmarkService) { }
  ngOnInit(): void {
    this.Bookmarks = this.serve.getBookmarks()
  }

}
