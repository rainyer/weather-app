import { combineReducers } from 'redux'
import citiesReducer, { City } from "./citiesReducer";

export interface StoreState {
  cities: City[];
}

export default combineReducers<StoreState>({
  cities: citiesReducer
})