import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@enviroments/environment';

export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
