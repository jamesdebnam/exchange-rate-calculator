import axios from "axios";
import { API_KEY } from "./API_KEY";

function rateGet(values) {
  return axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
}

export default rateGet;
