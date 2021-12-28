import { countNeighbours } from "@/functions/countStep";

describe("testing countNeighbours", () => {
  it("countNeighbours corner", () => {
    expect(
      countNeighbours(
        [
          [1, 1, 1],
          [0, 1, 0],
          [0, 0, 1],
        ],
        0,
        0
      )
    ).toBe(2);
  });
  it("countNeighbours center", () => {
    expect(
      countNeighbours(
        [
          [1, 1, 1],
          [1, 1, 0],
          [0, 0, 1],
        ],
        1,
        1
      )
    ).toBe(5);
  });
  it("countNeighbours side", () => {
    expect(
      countNeighbours(
        [
          [1, 1, 1],
          [1, 1, 0],
          [0, 0, 1],
        ],
        2,
        1
      )
    ).toBe(4);
  });
});
