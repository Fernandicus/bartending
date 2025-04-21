import { Drink, totalDrinksInterval } from "./constants";

function getRandomNum(drinksRange: { min: number; max: number }) {
  const { max, min } = drinksRange;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type RandomDrinks = { amount: number; drink: Drink };
export function getRandomDrinks(
  drinks: Drink[],
  drinksRange: { min: number; max: number }
): RandomDrinks[] {
  const numBebidas = getRandomNum(totalDrinksInterval);

  const seleccion: RandomDrinks[] = [];
  const copy = [...drinks];

  for (let i = 0; i < numBebidas && copy.length > 0; i++) {
    const index = getRandomNum({ min: 0, max: copy.length - 1 });
    const [bebida] = copy.splice(index, 1);
    const cantidad = getRandomNum({
      min: drinksRange.min,
      max: drinksRange.max - 1,
    });
    seleccion.push({ amount: cantidad, drink: bebida });
  }

  return seleccion;
}
