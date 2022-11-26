import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[] = [] ;
  constructor() { 
    this.loadState();
    this.saveState();
    fromEvent<StorageEvent>(window, "storage").subscribe((event:StorageEvent)=>{
      if(event.key === 'todos') this.loadState()
    });
  }
  getTodos() {
    return this.todos
  }
  getTodo(id:string):Todo {
    const element = this.todos.find((e) => e.id === id);
    return element!;
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
    this.saveState();
  }
  updateTodo(id:string , updateFilds : Partial<Todo>){
    const todo = this.getTodo(id);
    Object.assign(todo,updateFilds);
    this.saveState();
  }
  deleteTodo(id: string){
    const todoIndex = this.todos.findIndex(n =>  n.id === id );
    if (todoIndex == -1) return
    this.todos.splice(todoIndex,1);
    this.saveState();
  }
  saveState(){
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
  loadState(){
    try {
      const bookmarkInLocalStorage = JSON.parse(localStorage.getItem('todos')!)
      if(!bookmarkInLocalStorage) return
      this.todos.length = 0;
      this.todos.push(...bookmarkInLocalStorage)
    } catch (error) {
      console.log('erorr')
    }
  }
  }

