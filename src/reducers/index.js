import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import conversionRates from "./conversionRates";

export default combineReducers({
  form: formReducer,
  rates: conversionRates,
});
