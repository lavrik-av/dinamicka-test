import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromTodoActions from '../actions/todo.actions';
import { ToDoItem } from '../models/todo.model';

export const todoFeatureKey = 'todos';

export interface TodoState extends EntityState<ToDoItem>{
  error: any;
}

export function sortByDate(a: ToDoItem, b: ToDoItem): number {
  return new Date( b.date ).getTime() - new Date( a.date ).getTime()
}

export const todoAdapter:EntityAdapter<ToDoItem> = createEntityAdapter<ToDoItem>({
  sortComparer: sortByDate
});

export const todoInitialState = todoAdapter.getInitialState({
  error: null
});

export const reducer = createReducer(
  todoInitialState,
  on(
    fromTodoActions.loadToDosSuccess,
    ( state, action ) => todoAdapter.addAll( action.todos, state )
  ),
  on(
    fromTodoActions.addToDo,
    (state, action) => todoAdapter.addOne( action.todo, state )
  )

);
