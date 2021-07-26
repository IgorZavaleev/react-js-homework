import { binaryOperatorsCalc, firstPrioritiesCalc, secondPrioritiesCalc, unaryOperatorsCalc } from "./engine";
import { FIRST, SECOND, ZERO } from "./binaryOperators";

describe("testing unaryOperatorsCalc", () => {
  it("[2, **]", () => {
    expect(unaryOperatorsCalc([2, "**", '+', 3])).toEqual([4, '+', 3]);
  });
  it("[3, '-', 5, '!']", () => {
    expect(unaryOperatorsCalc([3, "-", 5, '!'])).toEqual([3, "-", 120]);
  });
});

describe("testing binaryOperatorsCalc", () => {
  it("[2, '+', 3]", () => {
    expect(binaryOperatorsCalc([2, '+', 3], SECOND)).toEqual([5]);
  });
  it("[2, '+', 3, '-', 4]", () => {
    expect(binaryOperatorsCalc([2, '+', 3, '-', 4], SECOND)).toEqual([1]);
  });
  it("[2, '+', 3, '-', 4]", () => {
    expect(binaryOperatorsCalc([2, '+', 3, '*', 4], FIRST)).toEqual([2, '+', 12]);
  });
  it("[2, '**', 3, '*', 4]", () => {
    expect(binaryOperatorsCalc([2, '**', 3, '*', 4], ZERO)).toEqual([8, '*', 4]);
  });
});

// describe("secondPrioritiesCalc simple cases", () => {
//   it("[32, + 32]", () => {
//     expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
//   });
//
// describe("firstPrioritiesCalc simple cases", () => {
//   it("[1, * 32]", () => {
//     expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
//   });
//
//   it("[32, /, 32]", () => {
//     expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
//   });
//
//   it("[32, + 32]", () => {
//     expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
//   });
// });
//
// describe("firstPrioritiesCalc mixed with second priorities cases", () => {
//   it("[32, /, 32, +, 10, *, 10]", () => {
//     expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
//       1,
//       "+",
//       100,
//     ]);
//   });
// });
//
// describe("secondPrioritiesCalc invalid cases", () => {
//   it("[32, / 32]", () => {
//     expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
//       TypeError("Unexpected stack!")
//     );
//   });
// });
//
// describe("secondPrioritiesCalc simple cases", () => {
//   it("[32, + 32]", () => {
//     expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
//   });
//
//   it("[32, - 32]", () => {
//     expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
//   });
//
//   it("[32, - 32, +, 10]", () => {
//     expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
//   });
// });
