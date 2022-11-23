import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks : Bookmark[] =
  [
    new Bookmark('https://www.youtube.com','youtube')
  ];
  constructor() { }
  getBookmarks() {
    return this.bookmarks
  }
  getBookmark(id:string):Bookmark {
    const element = this.bookmarks.find((e) => e.id === id);
    return element!;
  }
  addBookmark(bookmark:Bookmark){
    this.bookmarks.push(bookmark)
  }
  updateBookmark(id:string , updateFilds : Partial<Bookmark>){
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark,updateFilds);
  }
  deleteBookmark(id: string){
    const bookmarkIndex = this.bookmarks.findIndex(n =>  n.id === id );
    if (bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex,1);
  }
}
