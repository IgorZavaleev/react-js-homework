export type UnaryOperationType = (argument: number) => number;
export type BinaryOperationType = (first: number, second: number) => number;

export const mul: BinaryOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: BinaryOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: BinaryOperationType = (
  first: number,
  second: number
): number => first + second;

export const sqr: UnaryOperationType = (argument: number): number =>
  argument * argument;

export const exp: BinaryOperationType = (
  first: number,
  second: number
): number => first ** second;

export const sub: BinaryOperationType = (
  first: number,
  second: number
): number => first - second;

export const factorial: UnaryOperationType = (argument) => {
  let result = 1;
  for (let i = 2; i <= argument; i++) {
    result *= i;
  }
  return result;
};

export const binaryOperators: { [key: string]: BinaryOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": sub,
  "^": exp,
};

export const unaryOperators: { [key: string]: UnaryOperationType } = {
  "**": sqr,
  "!": factorial,
};

export const mathPriorities: number[] = [0, 1, 2];

export const [ZERO, FIRST, SECOND] = mathPriorities;

export const binaryOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
  "^": ZERO,
};
