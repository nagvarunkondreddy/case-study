import { Action } from '@ngrx/store';
import {CurrentRoute} from '../../models/currentRoute.model';

export enum CurrentRouterActionTypes {
  LoadCurrentRouters = '[CurrentRouter] Load CurrentRouters',
    SaveCurrentRoutes= '[CurrentRoute] Save',
  
  
}

export class LoadCurrentRouters implements Action {
  readonly type = CurrentRouterActionTypes.LoadCurrentRouters;
}

export class SaveCurrentRoutes implements Action{
  readonly type=CurrentRouterActionTypes.SaveCurrentRoutes;
  constructor(public payload: CurrentRoute) {}
}


export type CurrentRouterActions = LoadCurrentRouters | SaveCurrentRoutes;
