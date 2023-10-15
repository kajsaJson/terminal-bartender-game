/** @type {(text: string) => void} */
export const print = (text) => {
  const trimmedText = text.trimStart();

  const formattedText = `\n ${trimmedText}`;

  console.log(formattedText);
};
