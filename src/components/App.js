import React from "react";
import "../master.css";

import Calculator from "./Calculator";
export default function App() {
  return (
    <div>
      <h1 className="title">Exchange Rate Calculator</h1>
      <p className="title__subheader">This economy eh...</p>
      <Calculator />
      <a href="https://www.exchangerate-api.com">
        Currency Conversion by ExchangeRate-API.com
      </a>
    </div>
  );
}
