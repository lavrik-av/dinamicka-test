import { City } 								from '../../core/models/city';
import { CITY_ACTIONS, CityAction } from '../actions/cities.action';
import { AppState } 						from '../app.state';

export const ActionsTypes = {
	ADD_CITY		:	'[CITY] add city',
	DELETE_CITY	: '[CITY] delete city'
};

let cities: City[] = [
	{
		id: 'LVI',
		en : 'Lviv',
		ru : 'Львов',
		ua : 'Львів',
		enabled : false
	},
	{
		id: 'ZAP',
		en : 'Zaporozhye',
		ru : 'Запорожье',
		ua : 'Запоріжжя',
		enabled : false
	}
];

export const appInitialState: AppState = {
	cities 		: cities,
	positions : [],
	loading 	: false,
	error 		: undefined	
}

export function CitiesReducer( state: AppState = appInitialState, action: CityAction ){

	switch ( action.type ) {

		case CITY_ACTIONS.ADD_CITY:
			
			return 	{ ...state,
				cities : [ ...state.cities, action.payload ],
				loading : false
			}		
			break;
	
		case CITY_ACTIONS.DELETE_CITY:
			
			return 	{ ...state,
				cities : state.cities.filter( city => city.id !== action.payload ),
				loading : false
			}			
			break;
	
		default:

			return state;
			break;
	}
}
