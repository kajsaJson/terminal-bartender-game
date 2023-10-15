/** @type {<T>(array: readonly T[]) => T} */
export const pickRandomItemFrom = (array) => {
  const { length } = array;

  const randomIndex = Math.floor(Math.random() * length);

  return array[randomIndex];
};
