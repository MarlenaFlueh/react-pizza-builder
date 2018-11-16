import { combineReducers } from "redux";

import ingsReducer from "./ingsReducer";
import contactDataReducer from "./contactDataReducer";
import authDataReducer from "./authDataReducer";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  ingredients: ingsReducer,
  contactData: contactDataReducer,
  authData: authDataReducer,
  form: formReducer
});

export default rootReducer;
