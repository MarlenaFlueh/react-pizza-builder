import { combineReducers } from "redux";

import ingsReducer from "./ingsReducer";

const rootReducer = combineReducers({
  ings: ingsReducer
});

export default rootReducer;
