import { Action } from '@ngrx/store';
import { City } from '../../core/models/city';

export namespace CITY_ACTIONS {
	export const ADD_CITY			= 'ADD_CITY';
	export const DELETE_CITY	= 'DELETE_CITY';
}

export class AddCity implements Action {

	readonly type = CITY_ACTIONS.ADD_CITY;

	constructor( public payload: City ){
	}
}

export class DeleteCity implements Action {

	readonly type = CITY_ACTIONS.DELETE_CITY;

	constructor( public payload: string ) {
	}
}

export type CityAction = AddCity | DeleteCity;