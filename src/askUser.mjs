import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

/** @type {(() => Promise<string>)} */
export const askUser = async () => {
  const readline = createInterface({
    input: stdin,
    output: stdout,
  });

  const answer = await readline.question(" ");

  readline.close();

  return answer;
};
