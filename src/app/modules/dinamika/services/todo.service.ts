import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '@enviroments/environment';
import { Store, select } from '@ngrx/store';

import { ToDoItem} from '../store/models/todo.model';
import * as fromTodoActions from '../store/actions/todo.actions';
import { selectTodos } from '../store/selectors/todo.selectors';
import { TodoState } from '../store/reducers/todo.reducer';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private store: Store<TodoState>,
    private httpClient: HttpClient
  ) { }

  loadTodos() {
    return this.httpClient.get<ToDoItem[]>( environment.todoUrl );
  }

  getTodos():Observable<ToDoItem[]> {

   this.store.dispatch( fromTodoActions.loadToDos() );
   return this.store.pipe( select( selectTodos ) );

  }

  addTodo( text: string ):void {

    const todo = <ToDoItem>{
      id: new Date().getTime(),
      text: text,
      date: new Date().toString()
    };

    this.store.dispatch( fromTodoActions.addToDo({ todo }) );

  }

}
