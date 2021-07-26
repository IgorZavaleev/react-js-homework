import { isNumber } from "./helpers";
import { binaryOperators, unaryOperators } from "./binaryOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    if (isNumber(item)) {
      result.push(Number(item));
    } else if (unaryOperators.hasOwnProperty(item) || binaryOperators.hasOwnProperty(item) ) {
      result.push(item);
    } else {
      throw new TypeError(`Unexpected item "${item}"`);
    }
    return result;
  }, []);
};
