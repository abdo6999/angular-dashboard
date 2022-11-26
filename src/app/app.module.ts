import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarkTileComponent } from './bookmark/bookmark-tile/bookmark-tile.component';
import { NoteComponent } from './notes/note/note.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoComponent } from './todos/todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { BookmarkMangeComponent } from './bookmark-mange/bookmark-mange.component';
import { EditBookmarkComponent } from './bookmark-mange/edit-bookmark/edit-bookmark.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BookmarkComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    NoteComponent,
    AddNotesComponent,
    EditNoteComponent,
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    BookmarkMangeComponent,
    EditBookmarkComponent,
    NotificationComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
