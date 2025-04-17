import React, { useState } from "react";

const getRandomNumber = (min: number, max: number) => {
  return (Math.floor(Math.random() * (max - min + 1) * 10) + min) / 10;
};

const getNextRoundedNumber = (base: number, min: number) => {
  const step = 5;
  let value = Math.ceil((base + 1) / step) * step;
  while (value <= min) {
    value += step;
  }
  return value;
};

const generateNumbers = () => {
  const price = getRandomNumber(2, 120);
  const cash = getNextRoundedNumber(price, price + 5 + getRandomNumber(0, 100));
  const priceWithTip = getNextRoundedNumber(price, price + 1);

  const validTip =
    priceWithTip < cash ? priceWithTip : price + Math.floor((cash - price) / 2);
  const finalTip = Math.round(validTip / 5) * 5;

  return {
    price,
    cash,
    priceWithTip: finalTip,
  };
};

export function Tips() {
  const [values, setValues] = useState(generateNumbers());
  const [calculatedTip, setCalculatedTip] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);

  const handleGenerate = () => {
    setValues(generateNumbers());
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Generador de Precios</h2>
      <p>
        <strong>Price:</strong> ${values.price}
      </p>
      <p>
        <strong>Cash:</strong> ${values.cash}
      </p>
      <p>
        <strong>Price with Tip:</strong> ${values.priceWithTip}
      </p>
      <button
        onClick={() => {
          handleGenerate();
          setCalculatedTip(0);
          setTip(0);
        }}
      >
        Generar Nuevos Números
      </button>
      <input
        type="number"
        onChange={(e) => {
          setCalculatedTip(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setTip(calculatedTip);
        }}
      >
        Check tip
      </button>
      {tip > 0 && (
        <p>{Math.round((values.priceWithTip - values.price) * 10) / 10}</p>
      )}
    </div>
  );
}
