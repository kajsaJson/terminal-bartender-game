import { setTimeout } from "node:timers/promises";
import { DRINKS } from "./Drink.mjs";
import { askUser } from "./askUser.mjs";
import { bartenderLines, unhappyReplies } from "./characterLines.mjs";
import { createDrinksMenu } from "./functions/createDrinksMenu.mjs";
import { extractEmojisFrom } from "./functions/extractEmojisFrom.mjs";
import { extractIngredientsFrom } from "./functions/extractIngredientsFrom.mjs";
import { isMatchingDrink } from "./functions/isMatchingDrink.mjs";
import { pickRandomItemFrom } from "./functions/pickRandomItemFrom.mjs";
import { randomCustomerOrder } from "./functions/randomCustomerOrder.mjs";
import { print } from "./print.mjs";

// Initial Score
let score = 0;

/** @type {() => Promise<void>} */
export const gameLoop = async () => {
  console.clear();

  const orderedDrink = pickRandomItemFrom(DRINKS);

  const order = randomCustomerOrder(orderedDrink);

  const drinksMenu = createDrinksMenu();

  // Game screen
  const customerOrder = [
    //
    `score: ${score}`,
    ...drinksMenu,
    order,
    "Mix a drink:",
  ];

  for (const line of customerOrder) {
    print(line);
  }

  // Player mixes and serves drink
  const answer = await askUser();

  const emojis = extractEmojisFrom(answer);

  const selectedIngredients = extractIngredientsFrom(emojis);

  // ✅ If drink is correct
  if (isMatchingDrink(selectedIngredients, orderedDrink)) {
    score++;

    const { emoji } = orderedDrink;

    const line = pickRandomItemFrom(bartenderLines);

    console.clear();

    print(line);

    print(`${emoji}`);

    await setTimeout(3000);

    console.clear();

    print(`New Score: ${score}`);

    await setTimeout(2000);

    await gameLoop();

    // ❌ If drink is NOT correct
  } else {
    console.clear();

    print("BLARGH!");

    await setTimeout(1000);

    console.clear();

    const reply = pickRandomItemFrom(unhappyReplies);

    print(reply);

    score = 0;

    await setTimeout(2000);

    console.clear();

    print(`Score: ${score}`);

    print("GAME OVER");

    await setTimeout(3000);

    // 🔁 Continues loop
    gameLoop();
  }
};
