import { combineReducers } from 'redux'
import citiesReducer from "./citiesReducer";
import { City } from "../types/domain";

export interface StoreState {
  cities: City[];
}

export default combineReducers<StoreState>({
  cities: citiesReducer
})