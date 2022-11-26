import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NoteService } from '../shared/notes-service/note.service';
import { Note } from '../shared/notes-service/note.model';
import { NotificationService } from '../shared/notification-service/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  note !: Note
  constructor(private notifserve:NotificationService,private routeA : ActivatedRoute ,private route : Router, private serve : NoteService) { }

  ngOnInit(): void {
    this.routeA.paramMap.subscribe((pramMap:ParamMap)=>{
      const idPram = pramMap.get('id') || 'not exist';
      this.note = this.serve.getNote(idPram);
    })
  }
  onFormsubmit(form : NgForm){
    this.serve.updateNote(this.note.id,form.value)
    this.route.navigateByUrl('notes')
    this.notifserve.show('Notes Updated Successfully')
  }
}
