import { useEffect, useRef, useState } from "react";
import { getRandomDrinks } from "./drinks-generator";
import { Drink } from "./constants";

export function useDrinksGenerator(
  frequency: number,
  drinksMenu: Drink[],
  drinksRange: { min: number; max: number }
) {
  const [drinks, setDrinks] = useState<ReturnType<typeof getRandomDrinks>>([]);
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
