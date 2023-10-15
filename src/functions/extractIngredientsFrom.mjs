import { isIngredient } from "./isIngredient.mjs";

/** @type {(emojis: string[]) => Ingredient[]} */
export const extractIngredientsFrom = (emojis) => {
  return emojis.filter(isIngredient);
};
