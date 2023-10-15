import { Drink } from "../Drink.mjs";

/** @type {(selectedIngredients: Ingredient[], orderedDrink: Drink) => boolean} */
export const isMatchingDrink = (selectedIngredients, orderedDrink) => {
  const { recipie } = orderedDrink;

  for (const selectedIngredient of selectedIngredients) {
    if (!recipie.includes(selectedIngredient)) {
      return false;
    }
  }

  return true;
};
