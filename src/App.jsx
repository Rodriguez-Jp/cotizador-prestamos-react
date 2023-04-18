import Header from "./Header";

function App() {
  return (
    <div className="my-20 p-10 shadow-lg bg-white max-w-lg mx-auto font-extrabold">
      <Header />
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
      />
    </div>
  );
}

export default App;
