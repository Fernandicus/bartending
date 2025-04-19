type Drink = {
  name: string;
  receipt: Array<[string, number]>;
};

const poolBarCocktailsList: Drink[] = [
  {
    name: "Mojito",
    receipt: [
      ["Ron Bacardi", 5],
      ["Azúcar", 3],
      ["Lima", 4],
      ["Hierba buena", 2],
      ["Soda", -1],
    ],
  },
  {
    name: "Virgin Mojito",
    receipt: [
      ["Azúcar blanco", 3],
      ["Lima", 4],
      ["Hierba buena", 2],
      ["Soda", -1],
    ],
  },
  {
    name: "Piña Colada",
    receipt: [
      ["Ron Bacardi", 5],
      ["Sirope de Coco", 3],
      ["Leche de Coco", 5],
      ["Z. Piña", 20],
    ],
  },
  {
    name: "Virgin Colada",
    receipt: [
      ["Sirope de Coco", 5],
      ["Leche de Coco", 5],
      ["Z. Piña", 25],
    ],
  },
  {
    name: "Mojito Sabores",
    receipt: [
      ["Lima", 4],
      ["Hierbabuena", 2],
      ["Sirope fruta", 5],
      ["Soda", -1],
    ],
  },
  {
    name: "Daiquiri Sabores",
    receipt: [
      ["Ron Bacardi", 5],
      ["Sirope Fruta", 5],
      ["Azúcar", 3],
      ["Z. Limón", 3],
    ],
  },
  {
    name: "Aperol Spritz",
    receipt: [
      ["Aperol", 5],
      ["Cava", 16],
      ["Soda", -1],
    ],
  },
  {
    name: "Hugo",
    receipt: [
      ["Flor de Sauco", 5],
      ["Cava", 16],
      ["Soda", -1],
    ],
  },
  {
    name: "Caipirinha / Caipiroska",
    receipt: [
      ["Cachaça o Vodka Smirnoff", 5],
      ["Azúcar blanco", 2],
      ["Lima", 4],
      ["Soda", -1],
    ],
  },
  {
    name: "Long Island Ice Tea",
    receipt: [
      ["Ron Bacardi", 2],
      ["Tequila Jose Cuervo", 2],
      ["Gin Gordon's", 2],
      ["Triple Seco", 2],
      ["Vodka Smirnoff", 2],
      ["Azucar", 2],
      ["Z. Limón", 3],
      ["Coca-Cola Zero", -1],
    ],
  },
  {
    name: "Porn Star Martini",
    receipt: [
      ["Vodka Smirnoff Vainilla", 5],
      ["Pure de Passion Fruit", 4],
      ["Z. Limón", 3],
      ["Passoa", 5],
      ["Clara Huevo", 3],
    ],
  },
  {
    name: "Mai Tai",
    receipt: [
      ["Ron Captain Morgan", 3],
      ["Ron Bacardi", 3],
      ["Z. Limón", 3],
      ["Jarabe Caimán Lime Juice", 2],
      ["Amaretto", 0.5],
      ["Granadina", 0.5],
      ["Z. Piña", 4],
    ],
  },
  {
    name: "Sex on the Beach",
    receipt: [
      ["Vodka Smirnoff", 4],
      ["Licor de Melocotón", 3],
      ["Granadina", 1],
      ["Z. Naranja", 10],
      ["Z. Arándanos", 8],
    ],
  },
  {
    name: "Espresso Martini",
    receipt: [
      ["Vodka Smirnoff", 5],
      ["Kalhua", 3],
      ["Azucar", 2],
      ["Carga de Café", 5],
    ],
  },
  {
    name: "Margarita",
    receipt: [
      ["Tequila Jose Cuervo", 5],
      ["Triple Seco", 5],
      ["Z. Limón", 3],
    ],
  },
  {
    name: "Bloody Mary",
    receipt: [
      ["Vodka Smirnoff", 5],
      ["Pimienta", -1],
      ["Sal", -1],
      ["Tabasco", -1],
      ["Lea Perrins", -1],
      ["Z. Limón", 3],
      ["Z. Tomate Pago", 20],
    ],
  },
  {
    name: "Limonada Casera",
    receipt: [
      ["Z. Limón", 6],
      ["Azucar", 4],
      ["Agua", -1],
    ],
  },
  {
    name: "Sangría Tinto",
    receipt: [
      ["Licor de Melocotón", 2],
      ["Licor de Banana", 2],
      ["Tío Pedro", 2],
      ["Z. Naranja", 2],
      ["Vino Tinto", -1],
      ["Fanta Limon", -1],
    ],
  },
  {
    name: "Sangría Cava/Blanco",
    receipt: [
      ["Licor de Melocotón", 2],
      ["Licor de Banana", 2],
      ["Tío Pedro", 2],
      ["Z. Naranja", 2],
      ["Cava/Blanco", -1],
      ["Sprite", -1],
    ],
  },
  {
    name: "Cosmopolitan",
    receipt: [
      ["Vodka Smirnoff", 5],
      ["Triple Seco", 3],
      ["Z. Limón", 3],
      ["Z. Arándanos", 3],
    ],
  },
];

export const skyBarCocktailsList = [
  ...poolBarCocktailsList,
  {
    name: "Pimm's Cup",
    receipt: [
      ["Pimm's", 5],
      ["Z. Limón", 3],
      ["Azucar", 2],
      ["Sprite", -1],
    ],
  },
  {
    name: "Moscow Mule",
    receipt: [
      ["Vodka Absolut", 5],
      ["Z. Limón", 1.5],
      ["Ginger Beer", -1],
    ],
  },
  {
    name: "London Mule",
    receipt: [
      ["Bombay Sapphire", 5],
      ["Z. Limón", 1.5],
      ["Ginger Beer", -1],
    ],
  },
  {
    name: "Altitud Mare",
    receipt: [
      ["Bombay Sapphire", 5],
      ["Aperol", 2.5],
      ["Z. Limón", 2.5],
      ["Z. Naranja", 5],
      ["Z. Piña", 5],
      ["Azucar", 2.5],
    ],
  },
  {
    name: "Canonita Spritz",
    receipt: [
      ["Canonita", 5],
      ["Soda de Pomelo", -1],
      ["Cava Don Luciano", 15],
    ],
  },
  {
    name: "Tommy's Margarita",
    receipt: [
      ["Tequila Jose Cuervo", 6],
      ["Z. Limón", 3],
      ["Sirope de Agave", 2],
    ],
  },
  {
    name: "Dark'n Stormy",
    receipt: [
      ["Ron Spiced Captain Morgan", 5],
      ["Z. Limón", 2],
      ["Azúcar Líquida", 1],
      ["Ginger Beer", -1],
    ],
  },
  {
    name: "Amatista",
    receipt: [
      ["Bombay Sapphire", 3],
      ["Licor Violeta", 3],
      ["Grand Marnier", 3],
      ["Z. Limón", 2],
      ["Azúcar Líquida", 1.5],
      ["Clara de Huevo", 2],
    ],
  },
];

export const allDrinksList = [
  ...poolBarCocktailsList.map((drink) => drink.name),
  "Combinado",
  "Agua mineral / gas",
  "Shandy",
  "Bebida energética",
  "Batido de cacao",
  "Café expreso",
  "Café americano",
  "Latte macchiato",
  "Cortado",
  "Cappuccino",
  "Té e infusiones",
  "Matcha latte",
  "Ice matcha latte",
  "Estrella damm 25cl",
  "Magners 25cl",
  "Coronita 33cl",
  "Free damm 33 cl 0,0 %",
  "Copa viña real",
  "Copa ribas",
  "Copa prosecco",
  "Copa emina",
  "Copa marieta rose",
  "Copa marieta semi",
  "Miraval",
  "Chivite",
  "Copa jose pariente",
  "Copa marques de riscal",
  "Milkshake",
  "Tropic mix",
  "Peach paradise",
  "Red banana",
  "Combinado",
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
