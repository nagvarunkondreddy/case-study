import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromCurrentRouter from './current-router.reducer';


export interface State {

  [fromCurrentRouter.currentRouterFeatureKey]: fromCurrentRouter.State;
}

export const reducers: ActionReducerMap<State,any> = {

  [fromCurrentRouter.currentRouterFeatureKey]: fromCurrentRouter.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
