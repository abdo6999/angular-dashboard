import { v4 as uuidv4 } from 'uuid';

export class Todo {
  id!:string
  constructor(public content: string,public completed:boolean){
    this.id = uuidv4()
  }
}