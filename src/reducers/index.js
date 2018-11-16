import { combineReducers } from "redux";

import ingsReducer from "./ingsReducer";
import contactDataReducer from "./contactDataReducer";
import authDataReducer from "./authDataReducer";

const rootReducer = combineReducers({
  ingredients: ingsReducer,
  contactData: contactDataReducer,
  authData: authDataReducer
});

export default rootReducer;
