import { TodoService } from './../../shared/todo-serveice/todo.service';
import { Todo } from './../../shared/todo-serveice/todo.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo !: Todo;
  @Output() editeClick: EventEmitter<void> = new EventEmitter()
  @Output() deleteTodo: EventEmitter<void> = new EventEmitter()
  constructor(private serve : TodoService) { }
  
  ngOnInit(): void {
  }
  doCheck(){
    const check = !this.todo.completed
    this.serve.updateTodo(this.todo.id,{completed : check})
  }
  onEditeClick () {
    this.editeClick.emit();
  }
  onDeleteTodo(){
    this.deleteTodo.emit();
  }
}
