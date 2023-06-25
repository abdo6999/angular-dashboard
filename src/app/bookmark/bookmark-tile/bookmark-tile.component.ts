import { Bookmark } from './../../shared/bookmark-service/bookmark.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {
  @Input() bookmark !: Bookmark;
  icon !: string
  faviconError !: boolean
  constructor() { }

  ngOnInit(): void {
    this.icon = this.bookmark.url + '/favicon.ico';
  }

}
