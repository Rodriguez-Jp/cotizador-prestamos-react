function Button({ operador, handler }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center text-white bg-lime-500 rounded-full h-10 w-10 
    hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
      onClick={handler}
    >
      {operador}
    </button>
  );
}

export default Button;
