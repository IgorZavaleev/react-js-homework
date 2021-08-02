import { binaryOperatorsCalc, unaryOperatorsCalc } from "./engine";
import { FIRST, SECOND, ZERO } from "./mathOperators";

describe("testing unaryOperatorsCalc", () => {
  it("[2, **]", () => {
    expect(unaryOperatorsCalc([2, "**", "+", 3])).toEqual([4, "+", 3]);
  });
  it("[3, '-', 5, '!']", () => {
    expect(unaryOperatorsCalc([3, "-", 5, "!"])).toEqual([3, "-", 120]);
  });
});

describe("testing binaryOperatorsCalc", () => {
  it("[2, '+', 3]", () => {
    expect(binaryOperatorsCalc([2, "+", 3], SECOND)).toEqual([5]);
  });
  it("[2, '+', 3, '-', 4]", () => {
    expect(binaryOperatorsCalc([2, "+", 3, "-", 4], SECOND)).toEqual([1]);
  });
  it("[2, " + ", 3, " * ", 4]", () => {
    expect(binaryOperatorsCalc([2, "+", 3, "*", 4], FIRST)).toEqual([
      2,
      "+",
      12,
    ]);
  });
  it("[2, '^', 3, '*', 4]", () => {
    expect(binaryOperatorsCalc([2, "^", 3, "*", 4], ZERO)).toEqual([8, "*", 4]);
  });
});
