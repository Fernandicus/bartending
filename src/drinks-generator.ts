import { totalDrinksInterval } from "./constants";

function getRandomNum(drinksRange: { min: number; max: number }) {
  const { max, min } = drinksRange;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDrinks(
  drinks: string[],
  drinksRange: { min: number; max: number }
) {
  const numBebidas = getRandomNum(totalDrinksInterval);

  const seleccion = [];
  const copy = [...drinks];

  for (let i = 0; i < numBebidas && copy.length > 0; i++) {
    const index = getRandomNum({ min: 0, max: copy.length - 1 });
    const [bebida] = copy.splice(index, 1);
    const cantidad = getRandomNum({
      min: drinksRange.min,
      max: drinksRange.max - 1,
    });
    seleccion.push(`${cantidad} ${bebida}`);
  }

  return seleccion;
}
