/** @type {(answer: string) => string[]} */
export const extractEmojisFrom = (answer) => {
  const emojis = answer.match(/\p{Emoji}/gu);

  if (emojis) {
    return [...emojis];
  } else {
    return [];
  }
};
