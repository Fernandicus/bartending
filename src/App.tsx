import "./App.css";
import { useDrinksGenerator } from "./useDrinksGenerator";
import {
  poolBarDrinksList,
  Drink,
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
import { Modal } from "./Modal";

type Mode = "SkyBar" | "PoolBar";

export function App() {
  const modes: Mode[] = ["PoolBar", "SkyBar"];
  const [activeMode, setActiveMode] = useState(modes[0]);
  const isPoolBar = activeMode === "PoolBar";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrink, setSelectedDrinks] = useState<Drink | null>(null);
  const [showReceipts, setShowReceipts] = useState(false);

  const poolDrinks = useDrinksGenerator(
    frequency,
    poolBarDrinksList,
    drinksRange
  );
  const skyDrinks = useDrinksGenerator(
    frequency,
    skyBarCocktailsList,
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
        height: "90dvh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "start",
          width: "100%",
        }}
      >
        <Button
          label={"Receipts"}
          onClick={() => {
            setShowReceipts((prev) => !prev);
          }}
        />
      </div>
      <SwitchButton<Mode> modes={modes} activeMode={setActiveMode} />
      {!showReceipts ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "left",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {isPoolBar
            ? poolDrinks.drinks.map(({ amount, drink }, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedDrinks(drink);
                    }}
                    style={{
                      visibility: isHidden ? "hidden" : "visible",
                      backgroundColor: "#2a2a2a",
                      textAlign: "left",
                    }}
                  >
                    {`${amount}  ${drink.name}`}
                  </button>
                );
              })
            : skyDrinks.drinks.map(({ amount, drink }, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedDrinks(drink);
                    }}
                    style={{
                      visibility: isHidden ? "hidden" : "visible",
                      backgroundColor: "#2a2a2a",
                      textAlign: "left",
                    }}
                  >
                    {`${amount}  ${drink.name}`}
                  </button>
                );
              })}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          {skyBarCocktailsList
            .sort((drinkA, drinkB) => drinkA.name.localeCompare(drinkB.name))
            .map((drink, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedDrinks(drink);
                  }}
                  style={{
                    visibility: isHidden ? "hidden" : "visible",
                    backgroundColor: "#2a2a2a",
                    textAlign: "left",
                  }}
                >
                  {drink.name}
                </button>
              );
            })}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
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
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
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
            label={isHidden ? "Show" : "Hide"}
            icon={isHidden ? <EyeIcon /> : <EyeSlashIcon />}
            onClick={() => {
              if (timerRef.current) {
                clearTimeout(timerRef.current);
              }

              setIsHidden((prev) => !prev);
            }}
          />
        </div>
      </div>

      {selectedDrink && selectedDrink.receipt.length > 0 && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{selectedDrink.name}</h2>
          <div style={{ textAlign: "left", marginLeft: "3rem" }}>
            {selectedDrink.receipt.map(([ingredient, amount]) => {
              return (
                <>
                  <p>
                    {ingredient} - {amount === -1 ? "(Top)" : amount}
                  </p>
                </>
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
}
