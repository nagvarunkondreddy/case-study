import { Action } from '@ngrx/store';
import { CurrentRouterActions, CurrentRouterActionTypes } from '../actions/current-router.actions';
import { CurrentRoute } from '../../models/currentRoute.model';


export const currentRouterFeatureKey = 'currentRouter';

export interface State {
  currentRoute:CurrentRoute;
}

export const initialState: State = {
currentRoute:{'name':'project','route':'/project'}
};

export function reducer(state = initialState, action: CurrentRouterActions): State {
  switch (action.type) {
    case CurrentRouterActionTypes.SaveCurrentRoutes: 
    return {...state,currentRoute:action.payload};
    default:
      return state;
  }
}
