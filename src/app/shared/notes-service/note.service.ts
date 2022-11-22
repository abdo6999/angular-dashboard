import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes : Note[] =
  [
    new Note('this is title','this is content'),
    new Note('this is title','this is content')
  ];
  constructor() { }
  getNotes() {
    return this.notes
  }
  getNote(id:string):Note {
    const element = this.notes.find((e) => e.id === id);
    return element!;
  }
  addNote(note:Note){
    this.notes.push(note)
  }
  updateNote(id:string , updateFilds : Partial<Note>){
    const note = this.getNote(id);
    Object.assign(note,updateFilds);
  }
  deleteNote(id: string){
    const noteIndex = this.notes.findIndex(n =>  n.id === id );
    if (noteIndex == -1) return
    this.notes.splice(noteIndex,1);
  }
}