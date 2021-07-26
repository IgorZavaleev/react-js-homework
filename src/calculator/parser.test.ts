import { parser } from "./parser";
import { runner } from "./runner";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });

  it("1 + 32 + * / - 2 + 2", () => {
    expect(parser("1 + 32 + * / - 2 + 2")).toEqual([1, "+", 32, "+", "*", "/", "-", 2, "+", 2]);
  });
});

describe("Invalid cases", () => {
  it("1 + qq + 33 - 2", () => {
    expect(() => parser("1 + qq + 33 - 2")).toThrow(
      TypeError("Unexpected item \"qq\"")
    );
  });

  it("1- 2", () => {
    expect(() => parser("1- 2")).toThrow(TypeError("Unexpected item \"1-\""));
  });
});