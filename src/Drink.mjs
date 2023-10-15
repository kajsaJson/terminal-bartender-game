import { CHERRY, OLIVE, PEACH, STRAWBERRY, WATER } from "./INGREDIENTS.mjs";

// class for drink

export class Drink {
  /** @type {import("./typings/DrinkEmoji").DrinkEmoji} */
  emoji;

  /** @type {import("./typings/DrinkName").DrinkName} */
  name;

  /** @type {readonly Ingredient[]} */
  recipie;

  constructor(
    /** @type {import("./typings/DrinkEmoji").DrinkEmoji} */
    emoji,
    /** @type {import("./typings/DrinkName").DrinkName} */
    name,
    /** @type {readonly Ingredient[]} */
    recipie
  ) {
    this.emoji = emoji;
    this.name = name;
    this.recipie = recipie;
  }
}

export const CHERRY_POP = new Drink(
  //
  "🍷",
  "Cherry Pop",
  [WATER, CHERRY]
);

export const SHAKEN_OLIVE = new Drink(
  //
  "🍸",
  "Shaken Olive",
  [WATER, OLIVE]
);

export const PEACH_FUZZ = new Drink(
  //
  "🍹",
  "Peach Fuzz",
  [WATER, PEACH]
);

export const STRAWBERRY_DELIGHT = new Drink(
  //
  "🧃",
  "Strawberry Delight",
  [WATER, STRAWBERRY]
);

export const DRINKS = /** @type {const} */ ([
  //
  CHERRY_POP,
  SHAKEN_OLIVE,
  PEACH_FUZZ,
  STRAWBERRY_DELIGHT,
]);
