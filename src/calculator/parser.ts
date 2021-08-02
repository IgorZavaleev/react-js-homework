import { isNumber } from "./helpers";
import { binaryOperators, unaryOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item) => {
    if (isNumber(item)) {
      result.push(Number(item));
    } else if (
      // eslint-disable-next-line no-prototype-builtins
      unaryOperators.hasOwnProperty(item) ||
      // eslint-disable-next-line no-prototype-builtins
      binaryOperators.hasOwnProperty(item)
    ) {
      result.push(item);
    } else {
      throw new TypeError(`Unexpected item "${item}"`);
    }
    return result;
  }, []);
};
