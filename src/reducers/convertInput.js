export default function convertInput(state = "", action) {
  if (action.type === "CONVERT_CURRENCY" && action.payload) {
    // console.log(action);
    const { amount, input_currency, output_currency } = action.payload;
    if (amount && input_currency && output_currency) {
      return (
        (Number(amount) / action.rates[input_currency]) *
        action.rates[output_currency]
      ).toFixed(2);
    }
  }
  return state;
}
