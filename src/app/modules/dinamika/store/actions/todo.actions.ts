import { createAction, props } from '@ngrx/store';
import { ToDoItem } from '../models/todo.model';

export const loadToDos = createAction(
  '[ToDos] Load ToDos'
);

export const loadToDosSuccess = createAction(
  '[ToDos] Load ToDos Success',
  props<{ todos: ToDoItem[] }>()
);

export const addToDo = createAction(
  '[ToDos] Add Todo',
  props<{ todo: ToDoItem }>()
);

export const loadToDosFailure = createAction(
  '[ToDos] Load ToDos Failure',
  props<{ error: any }>()
);
