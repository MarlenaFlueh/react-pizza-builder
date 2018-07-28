import * as types from "../actions/types";
import * as utils from "../utils";

const initialState = {
  ings: {
    mozerella: 1,
    olive: 0,
    mushroom: 0,
    pepperoni: 1,
    redPepper: 0,
    greenPepper: 0,
    tomato: 1
  },
  fullPrice: 8.4
};

const ingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ings: {
          ...state.ings,
          [action.payload]: 1
        },
        fullPrice: state.fullPrice + utils.prices[action.payload]
      };
    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ings: {
          ...state.ings,
          [action.payload]: 0
        }
      };
    default:
      return state;
  }
};

export default ingsReducer;
