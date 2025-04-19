import "./App.css";
import { useDrinksGenerator } from "./useDrinksGenerator";
import {
  allDrinksList,
  drinksRange,
  frequency,
  skyBarCocktailsList,
} from "./constants";
import { RefreshIcon } from "./icons/RefreshIcon";
import { PauseIcon } from "./icons/PuaseIcon";
import { useRef, useState } from "react";
import { PlayIcon } from "./icons/PlayIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { EyeSlashIcon } from "./icons/EyeSlashIcon";
import { Button } from "./Button";
import { ClockIcon } from "./icons/ClockIcon";
import { SwitchButton } from "./SwitchButton";

type Mode = "SkyBar" | "PoolBar";

export function App() {
  const modes: Mode[] = ["PoolBar", "SkyBar"];
  const [activeMode, setActiveMode] = useState(modes[0]);
  const isPoolBar = activeMode === "PoolBar";

  const poolDrinks = useDrinksGenerator(frequency, allDrinksList, drinksRange);
  const skyDrinks = useDrinksGenerator(
    frequency,
    skyBarCocktailsList.map(({ name }) => name),
    drinksRange
  );

  const refresh = () => {
    if (isPoolBar) {
      poolDrinks.refresh();
      return;
    }

    skyDrinks.refresh();
  };
  const pause = () => {
    if (isPoolBar) {
      poolDrinks.pause();
      return;
    }

    skyDrinks.pause();
  };
  const play = () => {
    if (isPoolBar) {
      poolDrinks.play();
      return;
    }

    skyDrinks.play();
  };

  const drinks = isPoolBar ? poolDrinks.drinks : skyDrinks.drinks;

  const timerRef = useRef(0);
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
      <SwitchButton<Mode> modes={modes} activeMode={setActiveMode} />
      <div style={{ textAlign: "left", height: "100%" }}>
        {isPoolBar
          ? poolDrinks.drinks.map((drink, i) => {
              return (
                <p
                  key={i}
                  style={{ visibility: isHidden ? "hidden" : "visible" }}
                >
                  {drink}
                </p>
              );
            })
          : skyDrinks.drinks.map((drink, i) => {
              return (
                <p
                  key={i}
                  style={{ visibility: isHidden ? "hidden" : "visible" }}
                >
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
        <Button
          label="Refresh"
          icon={<RefreshIcon />}
          onClick={() => {
            refresh();
            setIsPlaying(false);
          }}
        />
        <Button
          label={isHidden ? "Show" : "Hide"}
          icon={isHidden ? <EyeIcon /> : <EyeSlashIcon />}
          onClick={() => {
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }

            setIsHidden((prev) => !prev);
          }}
        />
        <Button
          label="Timer"
          icon={<ClockIcon />}
          onClick={() => {
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
              setIsHidden(true);
            }, 1500 * drinks.length);
          }}
        />
        <Button
          label={isPlaying ? "Pause" : "Play"}
          icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
          onClick={() => {
            if (isPlaying) {
              setIsPlaying(false);
              pause();
              return;
            }

            play();
            setIsPlaying(true);
          }}
        />
      </div>
    </div>
  );
}
