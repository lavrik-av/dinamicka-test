import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import { TodoService } from '@services/todo.service';
import * as fromTodoActions from '../actions/todo.actions';

@Injectable()
export class TodosEffects {

  todos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTodoActions.loadToDos),
      mergeMap( () => this.todoService.loadTodos().pipe(
        map( todos => fromTodoActions.loadToDosSuccess({ todos })
        ),
        catchError(error => of(fromTodoActions.loadToDosFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
    ) {}

}
