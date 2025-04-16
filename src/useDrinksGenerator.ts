import { useEffect, useRef, useState } from "react";
import { getRandomDrinks } from "./drinks-generator";

export function useDrinksGenerator(
  frequency: number,
  drinksMenu: string[],
  drinksRange: { min: number; max: number }
) {
  const [drinks, setDrinks] = useState<string[]>([]);
  const intervalRef = useRef<number>(null);

  const randomDrinks = () => {
    return getRandomDrinks(drinksMenu, drinksRange);
  };

  useEffect(() => {
    setDrinks(randomDrinks());
  }, []);

  return {
    drinks,
    refresh: () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDrinks(randomDrinks);
    },
    play: () => {
      setDrinks(randomDrinks);

      intervalRef.current = setInterval(() => {
        setDrinks(randomDrinks);
      }, frequency);
    },
    pause: () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
  };
}
