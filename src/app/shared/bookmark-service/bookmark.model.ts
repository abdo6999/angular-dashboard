import { v4 as uuidv4 } from 'uuid';

export class Bookmark  {
  id!:string
  url: URL
  title:string
  constructor(url : string,title : string){
    this.url = new URL(url);
    this.id = uuidv4();
    if (!title) title = this.url.hostname
    this.title = title;
  }
}