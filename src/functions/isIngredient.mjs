import { INGREDIENTS } from "../INGREDIENTS.mjs";

/** @type {(letter: string) => letter is Ingredient} */
export const isIngredient = (letter) => {
  return INGREDIENTS.includes(/** @type {any} */ (letter));
};
