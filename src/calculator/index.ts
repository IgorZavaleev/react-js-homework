import { createInterface } from "readline";

import { runner } from "./runner";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<void> =>
  new Promise<void>((resolve) => {
    rl.question("> ", (answer: string) => {
      const result = runner(answer);

      if (result) {
        // eslint-disable-next-line no-console
        console.log(`Result: ${result}`);
      }

      resolve();
    });
  });

async function app(): Promise<null> {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await question();
  }
}

app();
