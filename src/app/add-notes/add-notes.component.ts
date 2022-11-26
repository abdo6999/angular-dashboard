import { Router} from '@angular/router';
import { NoteService } from '../shared/notes-service/note.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../shared/notes-service/note.model';
import { NotificationService } from '../shared/notification-service/notification.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  constructor(private notifserve:NotificationService,private serve : NoteService , private route : Router) { }

  ngOnInit(): void {
  }
  onFormsubmit(input : NgForm ){
    const note : Note = new Note(input.value.textarea,input.value.title);
    if (input.valid){
      this.serve.addNote(note);
      this.route.navigateByUrl('/notes')
      this.notifserve.show('Note Added Successfully')

    }else {
      alert('form invalid')
    }
  }
}
