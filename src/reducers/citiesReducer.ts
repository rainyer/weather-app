// State definition
export interface City {
  id: number;
  name: string;
}

// Action Types definition
export enum ActionTypes {
  SET_CITIES = 'cities/SET_CITIES',
}

// Action definition
interface SetCitiesAction {
  type: ActionTypes.SET_CITIES;
  payload: City[];
}

// Action Creators definitions
export const Creators = {
  setCities: (payload: City[]) => {
    console.log('yoooo', payload);
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
