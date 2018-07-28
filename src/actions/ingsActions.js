import * as types from "./types";

export const addIngredient = name => ({
  type: types.ADD_INGREDIENT,
  payload: name
});

export const removeIngredient = name => ({
  type: types.REMOVE_INGREDIENT,
  payload: name
});
