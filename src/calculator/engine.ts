import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  binaryOperators,
  mathPriorities,
  binaryOperatorsPriorities, unaryOperators, FIRST, SECOND
} from "./binaryOperators";

export const unaryOperatorsCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const operand = result[result.length - 1];
    const operator = item;

    if (isNumber(String(operand)) && unaryOperators[operator]) {
      return [
        ...result.slice(0, -1),
        unaryOperators[operator](Number(operand)),
      ];
    }

    result.push(item);
    return result;
  }, []);

export const binaryOperatorsCalc = (stack: ParsedLineType, priority: number): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const operand1 = result[result.length - 2];
    const operator = result[result.length - 1];
    const operand2 = item;

    if (isNumber(String(operand1)) && isNumber(String(operand2)) && binaryOperatorsPriorities[operator] === priority) {
      return [
        ...result.slice(0, -2),
        binaryOperators[operator](Number(operand1), Number(operand2)),
      ];
    }

    result.push(item);
    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && binaryOperatorsPriorities[item] === FIRST) {
      if (!binaryOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        binaryOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (binaryOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && binaryOperatorsPriorities[item] === SECOND) {
      result = binaryOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
