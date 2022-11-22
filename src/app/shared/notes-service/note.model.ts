import { v4 as uuidv4 } from 'uuid';

export class Note  {
  id!:string
  constructor(public content: string,public title:string){
    this.id = uuidv4()
  }
}