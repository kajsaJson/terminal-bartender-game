import { Drink } from "../Drink.mjs";

/** @type {(drink: Drink) => string} */
export const randomCustomerOrder = (drink) => {
  const { name } = drink;

  return `I would like ehm, one ${name}.`;
};
