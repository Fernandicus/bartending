import { useEffect, useRef, useState } from "react";
import { getRandomDrinks } from "./drinks-generator";

export function useDrinksGenerator(
  frequency: number,
  drinksMenu: string[],
  drinksRange: { min: number; max: number }
) {
  const [drinks, setDrinks] = useState<string[]>([]);
  const intervalRef = useRef<number>(null);
  const [restartInterval, setRestartInterval] = useState(false);

  const refreshInterval = () => {
    setRestartInterval((prev) => !prev);
  };

  const randomDrinks = () => {
    return getRandomDrinks(drinksMenu, drinksRange);
  };

  useEffect(() => {
    setDrinks(randomDrinks);

    intervalRef.current = setInterval(() => {
      setDrinks(randomDrinks);
    }, frequency);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [restartInterval]);

  return {
    drinks,
    refresh: () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      refreshInterval();
    },
    pause: () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
  };
}
