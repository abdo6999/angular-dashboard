import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : Todo[] =
  [
    new Todo('this is title',true),
    new Todo('this is title',false)
  ];
  constructor() { }
  getTodos() {
    return this.todos
  }
  getTodo(id:string):Todo {
    const element = this.todos.find((e) => e.id === id);
    return element!;
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
  updateTodo(id:string , updateFilds : Partial<Todo>){
    const todo = this.getTodo(id);
    Object.assign(todo,updateFilds);
  }
  deleteTodo(id: string){
    const todoIndex = this.todos.findIndex(n =>  n.id === id );
    if (todoIndex == -1) return
    this.todos.splice(todoIndex,1);
  }
}
