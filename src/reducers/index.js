import { combineReducers } from "redux";

import ingsReducer from "./ingsReducer";
import contactDataReducer from "./contactDataReducer";

const rootReducer = combineReducers({
  ingredients: ingsReducer,
  contactData: contactDataReducer
});

export default rootReducer;
