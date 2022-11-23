import { v4 as uuidv4 } from 'uuid';

export class Bookmark  {
  id!:string
  url: URL
  constructor(url : string,public title:string){
    this.url = new URL(url)
    this.id = uuidv4()
  }
}