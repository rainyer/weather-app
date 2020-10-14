import { City } from "./domain";

// Action Types Enum
export enum ActionTypes {
  SET_CITIES = 'cities/SET_CITIES',
}

// Actions Interfaces
export interface SetCitiesAction {
  type: ActionTypes.SET_CITIES;
  payload: City[];
}