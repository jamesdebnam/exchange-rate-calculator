import rateGet from "../axios";

export const makeRequest = () => async (dispatch) => {
  let response = await rateGet();
  dispatch({
    type: "RATE_DATA",
    payload: response.data.conversion_rates,
  });
};

export const convertCurrency = () => (dispatch, getState) => {
  const rates = getState().rates;
  const payload = getState().form.CalculatorInput.values;
  dispatch({
    type: "CONVERT_CURRENCY",
    payload: payload,
    rates: rates,
  });
};

export const swapFields = () => (dispatch, getState) => {
  const input_currency = getState().form.CalculatorInput.values.output_currency;
  const output_currency = getState().form.CalculatorInput.values.input_currency;
  dispatch({
    type: "SWAP_FIELDS",
    payload: {
      input_currency,
      output_currency,
    },
  });
};
