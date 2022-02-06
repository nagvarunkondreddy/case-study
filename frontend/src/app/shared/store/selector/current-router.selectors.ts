import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/current-router.reducer';

const getCurrentRouteFeatureState = createFeatureSelector<State>('currentRouter');

export const getCurrentRoute = createSelector(
    getCurrentRouteFeatureState,
    state => state.currentRoute
)

