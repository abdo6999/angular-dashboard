import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes : Note[] = [];
  constructor() { 
    this.loadState();
    this.saveState();
    fromEvent<StorageEvent>(window, "storage").subscribe((event:StorageEvent)=>{
      if(event.key === 'notes') this.loadState()
    });
  }
  getNotes() {
    return this.notes
  }
  getNote(id:string):Note {
    const element = this.notes.find((e) => e.id === id);
    return element!;
  }
  addNote(note:Note){
    this.notes.push(note)
    this.saveState();
  }
  updateNote(id:string , updateFilds : Partial<Note>){
    const note = this.getNote(id);
    Object.assign(note,updateFilds);
    this.saveState();
  }
  deleteNote(id: string){
    const noteIndex = this.notes.findIndex(n =>  n.id === id );
    if (noteIndex == -1) return
    this.notes.splice(noteIndex,1);
    this.saveState();
  }

  saveState(){
    localStorage.setItem('notes',JSON.stringify(this.notes))
  }
  loadState(){
    try {
      const bookmarkInLocalStorage = JSON.parse(localStorage.getItem('notes')!)
      if(!bookmarkInLocalStorage) return
      this.notes.length = 0;
      this.notes.push(...bookmarkInLocalStorage)
    } catch (error) {
      console.log('erorr')
    }
  }
  }
