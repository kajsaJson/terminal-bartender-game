export {};

declare global {
  export type Ingredient = import("./Ingredient").Ingredient;

  export type DrinkEmoji = import("./DrinkEmoji").DrinkEmoji;

  export type DrinkName = import("./DrinkName").DrinkName;
}
