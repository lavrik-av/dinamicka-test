import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

@Injectable()
export class CitiesEffects {

	@Effect() loadCities$: any  = this.actions$.pipe();

	constructor( private actions$: Actions ){
	}
}
