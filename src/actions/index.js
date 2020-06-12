import rateGet from "../axios";

export const makeRequest = () => async (dispatch) => {
  let response = await rateGet();
  dispatch({
    type: "RATE_DATA",
    payload: response.data.conversion_rates,
  });
};
