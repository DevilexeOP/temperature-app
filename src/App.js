import React, { useState } from "react";

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 24) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1; if (newTemperature > 20) {
      setTemperatureColor("hot");
    }
    if (newTemperature <= 24) {
      setTemperatureColor("cold");
    }

    setTemperatureValue(newTemperature);
  };

  return (
    <>
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${temperatureColor}`}>
            {temperatureValue}°C
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => increaseTemperature()}>+</button>
          <button onClick={() => decreaseTemperature()}>-</button>
        </div>
      </div>
    </>
  );
}
