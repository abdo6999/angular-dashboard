import { Bookmark } from './../shared/bookmark-service/bookmark.model';
import { BookmarkService } from './../shared/bookmark-service/bookmark.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private serve : BookmarkService , private route : Router) { }

  ngOnInit(): void {
  }
  onFormsubmit(input : NgForm ){
    console.log(input)
    const bookmark : Bookmark = new Bookmark(input.value.url,input.value.title);
    if (input.valid){
      this.serve.addBookmark(bookmark);
      this.route.navigateByUrl('/bookmarks')
    }else {
      alert('form invalid')
    }
  }
}
