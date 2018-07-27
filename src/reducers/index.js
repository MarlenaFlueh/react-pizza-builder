import { combineReducers } from "redux";

import ingsReducer from "./ingsReducer";

const rootReducer = combineReducers({
  ingredients: ingsReducer
});

export default rootReducer;
