import rateGet from "../axios";

export const makeRequest = () => async (dispatch) => {
  // let response = await rateGet();
  dispatch({
    type: "RATE_DATA",
    // payload: response.data.conversion_rates,
    payload: {
      USD: 1,
      AED: 3.672,
      ARS: 69.2453,
      AUD: 1.4441,
      BGN: 1.7224,
      BRL: 4.9461,
      BSD: 1,
      CAD: 1.3493,
      CHF: 0.9432,
      CLP: 768.9814,
      CNY: 7.0634,
      COP: 3656.8095,
      CZK: 23.4208,
      DKK: 6.5584,
      DOP: 58.0008,
      EGP: 16.1669,
      EUR: 0.8811,
      FJD: 2.164,
      GBP: 0.789,
      GTQ: 7.6931,
      HKD: 7.7499,
      HRK: 6.6649,
      HUF: 302.8844,
      IDR: 13781.7652,
      ILS: 3.4523,
      INR: 75.7459,
      ISK: 133.114,
      JPY: 107.024,
      KRW: 1197.1807,
      KZT: 399.9635,
      MXN: 22.3054,
      MYR: 4.2503,
      NOK: 9.4367,
      NZD: 1.542,
      PAB: 1,
      PEN: 3.4385,
      PHP: 49.9911,
      PKR: 164.0876,
      PLN: 3.9251,
      PYG: 6399.4167,
      RON: 4.2526,
      RUB: 69.0303,
      SAR: 3.7512,
      SEK: 9.2456,
      SGD: 1.3866,
      THB: 31.026,
      TRY: 6.8103,
      TWD: 29.6461,
      UAH: 26.582,
      UYU: 42.7816,
      ZAR: 16.8531,
    },
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
