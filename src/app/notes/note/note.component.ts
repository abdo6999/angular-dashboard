import { Note } from './../../shared/notes-service/note.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/shared/notes-service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note !: Note ;
  constructor(private route : Router, private serve : NoteService) { }
  ngOnInit(): void {
  }
  deleteNote(){
    this.serve.deleteNote(this.note.id)
  }
}
