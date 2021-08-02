import { parser } from "./parser";

import { binaryOperatorsCalc, unaryOperatorsCalc } from "./engine";
import { FIRST, SECOND, ZERO } from "./mathOperators";
import { isNumber } from "./helpers";

export const runner = (line: string): number => {
  const result = binaryOperatorsCalc(
    binaryOperatorsCalc(
      binaryOperatorsCalc(unaryOperatorsCalc(parser(line)), ZERO),
      FIRST
    ),
    SECOND
  );

  if (result.length === 1 && isNumber(String(result[0]))) {
    return Number(result[0]);
  }

  throw new TypeError("Unexpected string");
};
