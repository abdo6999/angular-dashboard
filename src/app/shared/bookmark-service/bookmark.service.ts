import { Injectable } from '@angular/core';
import {  fromEvent} from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks : Bookmark[] = []
  constructor() {
    this.loadState();
    fromEvent<StorageEvent>(window, "storage").subscribe((event:StorageEvent)=>{
      if(event.key === 'bookmark') this.loadState()
    });
  }

  
  getBookmarks() {
    return this.bookmarks
  }
  getBookmark(id:string):Bookmark {
    const element = this.bookmarks.find((e) => e.id === id);
    return element!;
  }
  addBookmark(bookmark:Bookmark){
    this.bookmarks.push(bookmark)
    this.saveState()
  }
  updateBookmark(id:string , updateFilds : Partial<Bookmark>){
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark,updateFilds);
    this.saveState();
  }
  deleteBookmark(id: string){
    const bookmarkIndex = this.bookmarks.findIndex(n =>  n.id === id );
    if (bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex,1);
    this.saveState()
  }

  saveState(){
    localStorage.setItem('bookmark',JSON.stringify(this.bookmarks))
  }
  loadState(){
    try {
      const bookmarkInLocalStorage = JSON.parse(localStorage.getItem('bookmark')!)
      if(!bookmarkInLocalStorage) return
      this.bookmarks.length = 0;
      this.bookmarks.push(...bookmarkInLocalStorage)
    } catch (error) {
      console.log('erorr')
    }
  }
}
