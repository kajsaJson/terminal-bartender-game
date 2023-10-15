import { DRINKS } from "../Drink.mjs";

/** @type {() => string[]} */
export const createDrinksMenu = () => {
  /** @type {string[]} */
  const drinksMenu = [];

  for (const drink of DRINKS) {
    const { emoji, name, recipie } = drink;

    const [firstIngredient, secondIngredient] = recipie;

    const menuItem = `${name}: ${emoji} = ${firstIngredient} + ${secondIngredient}`;

    drinksMenu.push(menuItem);
  }

  return drinksMenu;
};
