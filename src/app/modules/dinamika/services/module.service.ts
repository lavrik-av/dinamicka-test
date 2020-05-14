import { Injectable } from '@angular/core';
import { TodoService } from '@services/todo.service';
import { Observable } from 'rxjs';

import { ToDoItem } from '../store/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  _todos$: Observable<ToDoItem[]>;

  constructor(
    private todoService: TodoService
  ) { }

  getTotos():Observable<ToDoItem[]> {

    this._todos$ =  this.todoService.getTodos();
    return this._todos$;

  }

  addTodo( text: string ):void {
    this.todoService.addTodo( text );
  }

}
