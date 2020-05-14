import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureKey, TodoState, todoAdapter } from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodos = createSelector(
  selectTodoState,
  todoAdapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectTodoState,
  (state: TodoState) => state.error
);
