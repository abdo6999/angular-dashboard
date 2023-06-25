import { TodoService } from './../shared/todo-serveice/todo.service';
import { Todo } from './../shared/todo-serveice/todo.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification-service/notification.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private notifserve:NotificationService,private serve : TodoService , private route : Router) { }

  ngOnInit(): void {
  }
  onFormsubmit(input : NgForm ){
    const todo : Todo = new Todo(input.value.content,false);
    if (input.valid){
      this.serve.addTodo(todo);
      this.route.navigateByUrl('/todos')
      this.notifserve.show('Todo Added Successfully')

    }
  }
}
