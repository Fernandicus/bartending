import "./App.css";
import { useDrinksGenerator } from "./useDrinksGenerator";
import { drinksList, drinksRange, frequency } from "./constants";
import { RefreshIcon } from "./icons/RefreshIcon";
import { PauseIcon } from "./icons/PuaseIcon";
import { useState } from "react";
import { PlayIcon } from "./icons/PlayIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { EyeSlashIcon } from "./icons/EyeSlashIcon";

function App() {
  const { drinks, refresh, play, pause } = useDrinksGenerator(
    frequency,
    drinksList,
    drinksRange
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "70dvh",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "left", height: "100%" }}>
        {drinks.map((drink, i) => {
          return (
            <p key={i} style={{ visibility: isHidden ? "hidden" : "visible" }}>
              {drink}
            </p>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          onClick={() => {
            refresh();
            setIsPlaying(false);
          }}
        >
          <RefreshIcon width={18} />
          Refresh
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          onClick={() => {
            setIsHidden((prev) => !prev);
          }}
        >
          {isHidden ? (
            <>
              <EyeIcon width={18} />
              Show
            </>
          ) : (
            <>
              <EyeSlashIcon width={18} />
              Hidde
            </>
          )}
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          onClick={() => {
            if (isPlaying) {
              setIsPlaying(false);
              pause();
              return;
            }

            play();
            setIsPlaying(true);
          }}
        >
          {isPlaying ? (
            <>
              <PauseIcon width={18} />
              Pause
            </>
          ) : (
            <>
              <PlayIcon width={18} />
              Play
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
