import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from "./helpers";
import { calcularTotalPagar } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const MAX = 20000;
  const MIN = 0;
  const STEP = 100;

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);
  }, [cantidad, meses]);

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
        <Button operador="-" handler={handleClickDecremento} />
        <Button operador="+" handler={handleClickIncremento} />
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

      <p className="text-center text-5xl font-extrabold text-indigo-400 mt-3">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="mt-5 text-center text-2xl font-bold text-gray-600">
        Elige un <span className="text-indigo-400">Plazo</span> a pagar
      </h2>
      <select
        className="mt-5 text-center rounded-lg border border-gray-500 text-xl w-full p-2 text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="bg-gray-100 mt-5 text-gray-600 text-center p-2 text-xl">
        <h2 className="text-3xl mb-2">
          Resumen de<span className="text-indigo-400 "> Pagos</span>
        </h2>
        <p className="mb-2">{meses} meses</p>
        <p className="mb-2">
          Total a pagar: <span className="text-indigo-400">{total}</span>
        </p>
        <p className="mb-2">
          Mensuales:{" "}
          <span className="text-indigo-400">{parseInt(total / meses)}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
