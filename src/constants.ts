export type Drink = {
  name: string;
  receipt: Array<[string, number]>;
};

const poolBarCocktailsList: Drink[] = [
  {
    name: "Mojito",
    receipt: [
      ["Lima", 4],
      ["Azúcar", 3],
      ["Ron Bacardi", 5],
      ["Hierba buena", 2],
      ["Soda", -1],
    ],
  },
  {
    name: "Virgin Mojito",
    receipt: [
      ["Lima", 6],
      ["Azúcar", 3],
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
      ["Sirope fruta", 5],
      ["Hierbabuena", 2],
      ["Soda", -1],
    ],
  },
  {
    name: "Amaretto Sour",
    receipt: [
      ["Amaretto", 5],
      ["Z. Limón", 3],
      ["Azúcar", 1],
      ["C. Huevo", 2],
    ],
  },
  {
    name: "Whisky Sour",
    receipt: [
      ["JB", 5],
      ["Z. Limón", 4],
      ["Azúcar", 3],
      ["C. Huevo", 2],
    ],
  },
  {
    name: "Daiquiri Sabores",
    receipt: [
      ["Ron Bacardi", 5],
      ["Sirope Fruta", 5],
      ["Z. Limón", 3],
      ["Azúcar", 3],
    ],
  },
  {
    name: "Aperol Spritz",
    receipt: [
      ["Aperol", 5],
      ["Cava", -1],
      ["Soda", -1],
    ],
  },
  {
    name: "Hugo",
    receipt: [
      ["Flor de Sauco", 5],
      ["Cava", -1],
      ["Soda", -1],
    ],
  },
  {
    name: "Caipirinha / Caipiroska",
    receipt: [
      ["Lima", 4],
      ["Azúcar", 3],
      ["Cachaça / Vodka Smirnoff", 5],
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
      ["Z. Limón", 3],
      ["Azucar", 2],
      ["Coca-Cola Zero", -1],
    ],
  },
  {
    name: "Porn Star Martini",
    receipt: [
      ["Vodka Smirnoff Vainilla", 5],
      ["Pure de Passion Fruit", 5],
      ["Z. Limón", 3],
      ["Passoa", 2],
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
      ["Z. Piña", 4],
      ["Amaretto", 0.5],
      ["Granadina", 0.5],
    ],
  },
  {
    name: "Sex on the Beach",
    receipt: [
      ["Vodka Smirnoff", 5],
      ["Licor de Melocotón", 3],
      ["Z. Arándanos", 5],
      ["Z. Naranja", -1],
      ["Granadina", 1],
    ],
  },
  {
    name: "Espresso Martini",
    receipt: [
      ["Vodka Vainilla", 5],
      ["Kalhua", 3],
      ["Azucar", 2],
      ["Carga de Café", 5],
    ],
  },
  {
    name: "Margarita",
    receipt: [
      ["Tequila Jose Cuervo", 6],
      ["Triple Seco", 3],
      ["Z. Limón", 3],
    ],
  },
  {
    name: "Bloody Mary",
    receipt: [
      ["Vodka Smirnoff", 5],
      ["Z. Limón", 3],
      ["Z. Tomate Pago", 20],
      ["Pimienta", -1],
      ["Sal", -1],
      ["Tabasco", -1],
      ["Lea Perrins", -1],
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

export const skyBarCocktailsList: Drink[] = [
  ...poolBarCocktailsList,
  {
    name: "Aperol Sour",
    receipt: [
      ["Aperol", 5],
      ["Absolut Rapsberry", 3],
      ["Z. Limón", 2],
      ["Azúcar", 2],
      ["C. Huevo", 3],
    ],
  },
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
      ["Aperol", 3],
      ["Z. Limón", 3],
      ["Z. Naranja", 5],
      ["Z. Piña", 5],
      ["Azucar", 3],
    ],
  },
  {
    name: "Canonita Spritz",
    receipt: [
      ["Canonita", 5],
      ["Soda de Pomelo", -1],
      ["Cava Don Luciano", -1],
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
      ["Bombay Sapphire", 5],
      ["Licor Violeta", 3],
      ["Grand Marnier", 3],
      ["Z. Limón", 2],
      ["Z. Piña", 2],
      ["Clara de Huevo", 2],
    ],
  },
  {
    name: "Fly",
    receipt: [
      ["Vodka Absolute", 4],
      ["Lima Cordial", 4],
      ["Midori Melon", 1],
    ],
  },
  {
    name: "Passion Bubbles",
    receipt: [
      ["Vodka Absolute", 5],
      ["Campari", 2],
      ["Z. Limon", 2],
      ["Azucar", 2],
      ["Sirope Maracuya", 4],
      ["Z. Naranja", 2],
      ["Cava", -1],
    ],
  },
];

export const poolBarDrinksList: Drink[] = [
  ...poolBarCocktailsList,
  { name: "Combinado", receipt: [] },
  { name: "Agua mineral / gas", receipt: [] },
  { name: "Shandy", receipt: [] },
  { name: "Bebida energética", receipt: [] },
  { name: "Batido de cacao", receipt: [] },
  { name: "Café expreso", receipt: [] },
  { name: "Café americano", receipt: [] },
  { name: "Latte macchiato", receipt: [] },
  { name: "Cortado", receipt: [] },
  { name: "Cappuccino", receipt: [] },
  { name: "Té e infusiones", receipt: [] },
  { name: "Matcha latte", receipt: [] },
  { name: "Ice matcha latte", receipt: [] },
  { name: "Estrella damm 25cl", receipt: [] },
  { name: "Magners 25cl", receipt: [] },
  { name: "Coronita 33cl", receipt: [] },
  { name: "Free damm 33 cl 0,0 %", receipt: [] },
  { name: "Copa viña real", receipt: [] },
  { name: "Copa ribas", receipt: [] },
  { name: "Copa prosecco", receipt: [] },
  { name: "Copa emina", receipt: [] },
  { name: "Copa marieta rose", receipt: [] },
  { name: "Copa marieta semi", receipt: [] },
  { name: "Miraval", receipt: [] },
  { name: "Chivite", receipt: [] },
  { name: "Copa jose pariente", receipt: [] },
  { name: "Copa marques de riscal", receipt: [] },
  { name: "Milkshake", receipt: [] },
  { name: "Tropic mix", receipt: [] },
  { name: "Peach paradise", receipt: [] },
  { name: "Red banana", receipt: [] },
  { name: "Combinado", receipt: [] },
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
