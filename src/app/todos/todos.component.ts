import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';
import { TodoService } from './../shared/todo-serveice/todo.service';
import { Todo } from './../shared/todo-serveice/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations : [
    trigger('todoItemAnim',[
      transition(':leave',[
      animate(200,style({
        opacity:0,
        marginBottom:0,
        height:0,
      }))
    ])
  ])]
})
// animations : [
//   trigger('todoItemAnim',[
//     transition('leave',[
//       animate(1000,style({
//         opacity:0,
        
//       }))
//     ])
//   ])
// ]
export class TodosComponent implements OnInit {
  todos !: Todo[]
  constructor(private serve : TodoService,private router : Router) { }

  ngOnInit(): void {
    this.todos = this.serve.getTodos();
  }
  onEditeClick(todo : Todo){
    this.router.navigate(['/todos',todo.id]);
  }
  onDeleteTodo(todo : Todo){
    this.serve.deleteTodo(todo.id);
  }
}
