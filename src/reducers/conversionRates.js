export default function conversionRates(state = {}, action) {
  if (action.type === "RATE_DATA") {
    return { ...state, ...action.payload };
  } else return state;
}
