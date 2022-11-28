import { EditBookmarkComponent } from './bookmark-mange/edit-bookmark/edit-bookmark.component';
import { BookmarkMangeComponent } from './bookmark-mange/bookmark-mange.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

const routes: Routes = [
  {path:'' , redirectTo:'bookmarks',pathMatch: 'full'},
  {path:'bookmarks' , component:BookmarkComponent , data :{tap: 1}},
  {path:'bookmarks/Add' , component:AddBookmarkComponent },
  {path:'bookmarks/mange' , component:BookmarkMangeComponent ,children:[
    {path:':id' , component:EditBookmarkComponent}
  ]},
  {path:'todos' , component:TodosComponent , data :{tap: 2}},
  {path:'todos/Add-todo' , component:AddTodoComponent },
  {path:'todos/:id' , component:EditTodoComponent},
  {path:'notes' , component:NotesComponent , data :{tap: 3}},
  {path:'notes/Add-notes' , component:AddNotesComponent },
  {path:'notes/:id' , component:EditNoteComponent },
  { path: '**', component: WrongRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
