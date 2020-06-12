import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import conversionRates from "./conversionRates";
import convertInput from "./convertInput";

export default combineReducers({
  form: formReducer.plugin({
    CalculatorInput: (state, action) => {
      if (action.type === "SWAP_FIELDS") {
        return {
          ...state,
          values: {
            ...state.values,
            ...action.payload,
          },
        };
      }
      return state;
    },
  }),
  rates: conversionRates,
  output: convertInput,
});
