type Beverage<Type extends string> = {
  name: string;
  receipt: string[];
  type: Type;
};
type Cocktail = Beverage<"cocktail">;
type SoftDrink = Beverage<"softdrink">;
type Alcohol = Beverage<"alcohol">;
type Coffee = Beverage<"coffee">;
type Beer = Beverage<"beer">;
type Wine = Beverage<"wine">;
type Sangria = Beverage<"sangria">;

type Drink = Cocktail | SoftDrink | Alcohol | Coffee | Beer | Wine | Sangria;

type DrinkCatalog = {
  [Catalog in Drink as Drink["type"]]: Catalog;
};

export const drinksList = [
  "AGUA MINERAL / GAS",
  "BEBIDA ENERGÉTICA",
  "BATIDO DE CACAO",
  "CAFÉ EXPRESO",
  "CAFÉ AMERICANO",
  "LATTE MACCHIATO",
  "CORTADO",
  "CAPPUCCINO",
  "TÉ E INFUSIONES",
  "MATCHA LATTE",
  "ICE MATCHA LATTE",
  "ESTRELLA DAMM 25CL",
  "MAGNERS 25CL",
  "CORONITA 33CL",
  "FREE DAMM 33 CL 0,0 %",
  "COPA SANGRÍA",
  "COPA SANGRÍA CAVA",
  "C. SANGRÍA VINO BLANCO",
  "SAN FRANCISCO",
  "MOJITO SIN ALCOHOL",
  "VIRGIN COLADA",
  "VIRGIN DAIQUIRI SABORES",
  "MOJITO",
  "MOJITOS DE SABORES",
  "CAIPIRINHA",
  "PIÑA COLADA",
  "APEROL SPRITZ",
  "DAIQUIRIS DE SABORES",
  "ESPRESSO MARTINI",
  "HUGO",
  "SOURS",
  "LONG ISLAND ICE TEA",
  "PORN STAR",
  "SEX ON THE BEACH",
  "COPA VIÑA REAL",
  "COPA RIBAS",
  //"COPA GAVILAN",
  "COPA PROSECCO",
  "COPA EMINA",
  "COPA MARIETA ROSE",
  "COPA MARIETA SEMI",
  "MIRAVAL",
  "CHIVITE",
  "COPA JOSE PARIENTE",
  "COPA MARQUES DE RISCAL",
  "MILKSHAKE",
  "TROPIC MIX",
  "PEACH PARADISE",
  "RED BANANA",
  "COMBINADO",
];

export const drinksRange = {
  min: 1,
  max: 4,
};

export const totalDrinksInterval = {
  min: 3,
  max: 5,
};

export const frequency = 60000;
