import * as types from "../actions/types";

const initialState = {
  ings: {
    Mozerella: 1,
    Olive: 0,
    Mushroom: 0,
    Pepperoni: 1,
    RedPepper: 0,
    GreenPepper: 0,
    Tomato: 1
  },
  fullPrice: 6
};

const prices = {
  mozerella: 1.2,
  olive: 1.1,
  mushroom: 1.3,
  pepperoni: 1.2,
  redPepper: 1.3,
  greenPepper: 1.3,
  tomato: 1
};

const ingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ings: {
          ...state.ings,
          [action.payload]: 1
        }
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
