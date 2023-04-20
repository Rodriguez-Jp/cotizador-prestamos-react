import { useState } from "react";
import Header from "./Header";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const MAX = 20000;
  const MIN = 0;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert("Cantidad no valida");
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert("Cantidad no valida");
      return;
    }
    setCantidad(valor);
  }

  return (
    <div className="my-20 p-10 shadow-lg bg-white max-w-lg mx-auto font-extrabold">
      <Header />
      <div className="my-6 flex justify-between">
        <button
          type="button"
          className="flex justify-center items-center text-white bg-lime-500 rounded-full h-10 w-10 
          hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
          onClick={handleClickDecremento}
        >
          -
        </button>
        <button
          type="button"
          className="flex justify-center items-center text-white bg-lime-500 rounded-full h-10 w-10 
          hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
          onClick={handleClickIncremento}
        >
          +
        </button>
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-center text-5xl font-extrabold text-indigo-400">
        {cantidad}
      </p>
    </div>
  );
}

export default App;
