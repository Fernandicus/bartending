import "./App.css";
import { useDrinksGenerator } from "./useDrinksGenerator";
import { drinksList, drinksRange, frequency } from "./constants";
import { RefreshIcon } from "./icons/RefreshIcon";
import { PauseIcon } from "./icons/PuaseIcon";

function App() {
  const { drinks, refresh, pause } = useDrinksGenerator(
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
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
          onClick={refresh}
        >
          <RefreshIcon width={18} />
          Refresh
        </button>
        <button
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
          onClick={pause}
        >
          <PauseIcon width={18} />
          Pause
        </button>
      </div>
    </div>
  );
}

export default App;
