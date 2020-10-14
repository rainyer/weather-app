import { ActionTypes, SetCitiesAction } from "../types/actions"
import { City } from "../types/domain"

export const Creators = {
  setCities: (payload: City[]) => {
    return {
        type: ActionTypes.SET_CITIES,
        payload
      }
  }
};

const citiesReducer = (state: City[] = [], action: SetCitiesAction) => {
  switch (action.type) {
    case ActionTypes.SET_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
