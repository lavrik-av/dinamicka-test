import { Injectable } from '@angular/core';
import { TodoService } from '@services/todo.service';
import { Observable } from 'rxjs';

import { ToDoItem } from '../store/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private todos$: Observable<ToDoItem[]>;

  constructor(
    private todoService: TodoService
  ) { }

  getTotos():Observable<ToDoItem[]> {

    this.todos$ =  this.todoService.getTodos();
    return this.todos$;

  }

  addTodo( text: string ):void {
    this.todoService.addTodo( text );
  }

}
