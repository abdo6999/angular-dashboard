import { TodoService } from './../shared/todo-serveice/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../shared/todo-serveice/todo.model';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification-service/notification.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {


  todo !: Todo
  constructor(private notifserve:NotificationService,private routeA : ActivatedRoute ,private route : Router, private serve : TodoService) { }

  ngOnInit(): void {
    this.routeA.paramMap.subscribe((pramMap:ParamMap)=>{
      const idPram = pramMap.get('id') || 'not exist';
      this.todo = this.serve.getTodo(idPram);
    })
  }
  onFormsubmit(form : NgForm){
    this.serve.updateTodo(this.todo.id,form.value)
    this.route.navigateByUrl('/todos')
    this.notifserve.show('Todo Updated Successfully')
  }

}
