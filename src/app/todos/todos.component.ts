import { Router } from '@angular/router';
import { TodoService } from './../shared/todo-serveice/todo.service';
import { Todo } from './../shared/todo-serveice/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos !: Todo[]
  constructor(private serve : TodoService,private router : Router) { }

  ngOnInit(): void {
    this.todos = this.serve.getTodos();
  }
  onEditeClick(todo : Todo){
    this.router.navigate(['/todo',todo.id]);
  }
  onDeleteTodo(todo : Todo){
    this.serve.deleteTodo(todo.id);
  }
}
