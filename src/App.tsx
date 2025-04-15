import "./App.css";
import { useDrinksGenerator } from "./useDrinksGenerator";
import { drinksList, drinksRange, frequency } from "./constants";

function App() {
  const { drinks, refresh } = useDrinksGenerator(
    frequency,
    drinksList,
    drinksRange
  );

  return (
    <div style={{ height: "70dvh" }}>
      <div style={{ textAlign: "left", height: "100%" }}>
        {drinks.map((drink) => {
          return <p>{drink}</p>;
        })}
      </div>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}

export default App;
