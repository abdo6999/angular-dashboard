import { NoteService } from '../shared/notes-service/note.service';
import { Note } from './../shared/notes-service/note.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes !: Note[] 

  
  constructor(private noteServics:NoteService) { }

  ngOnInit(): void {
     this.notes = this.noteServics.getNotes()
  }

}
