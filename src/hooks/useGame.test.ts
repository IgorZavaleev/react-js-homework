import { renderHook, act } from "@testing-library/react-hooks/dom";
import { useGame } from "./useGame";
import { FieldType } from "@/types/field";

const checkEmptyField = (field: FieldType, xSize: number, ySize: number) => {
  expect(Array.isArray(field)).toBe(true);
  expect(field.length).toBe(ySize);
  field.forEach((cellsRow) => {
    expect(cellsRow.length).toBe(xSize);
    cellsRow.forEach((cellState) => expect(cellState).toBe(0));
  });
};

const checkTheOnlyCellIsAlive = (field: FieldType, x: number, y: number) => {
  field.forEach((cellsRow, rowNum) => {
    cellsRow.forEach((cellState, columnNum) => {
      if (x === columnNum && y === rowNum) {
        expect(cellState).toBe(1);
      } else {
        expect(cellState).toBe(0);
      }
    });
  });
};

const countAliveCells = (field: FieldType) => {
  let result = 0;
  field.forEach((cellsRow) => {
    cellsRow.forEach((cellState) => {
      result += cellState === 1 ? 1 : 0;
    });
  });

  return result;
};

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe("useGame tests", () => {
  it("returns field of empty cells depending on game size", () => {
    const { result } = renderHook(() => useGame());

    checkEmptyField(result.current.field, 30, 30);
    act(() => result.current.setGameSize("medium"));
    checkEmptyField(result.current.field, 60, 60);
    act(() => result.current.setGameSize("big"));
    checkEmptyField(result.current.field, 90, 90);
    act(() => result.current.setGameSize("small"));
    checkEmptyField(result.current.field, 30, 30);
    expect(1).toBeLessThan(2);
  });

  it("different game speeds produce different count of generations", () => {
    const msToRun = 5000;
    const { result } = renderHook(() => useGame());

    act(() => {
      jest.advanceTimersByTime(msToRun);
    });
    expect(result.current.generationNumber).toBe(0);

    act(() => {
      result.current.setGameSpeed("slow");
      jest.advanceTimersByTime(msToRun);
    });
    const lowSpeedGenerationsCount = result.current.generationNumber;

    act(() => {
      result.current.setGameSpeed("medium");
      jest.advanceTimersByTime(msToRun);
    });
    const mediumSpeedGenerationsCount =
      result.current.generationNumber - lowSpeedGenerationsCount;

    act(() => {
      result.current.setGameSpeed("fast");
      jest.advanceTimersByTime(msToRun);
    });
    const fastSpeedGenerationsCount =
      result.current.generationNumber -
      mediumSpeedGenerationsCount -
      lowSpeedGenerationsCount;

    act(() => {
      result.current.setGameSpeed("pause");
      jest.advanceTimersByTime(msToRun);
    });
    const pauseGenerationsCount =
      result.current.generationNumber -
      lowSpeedGenerationsCount -
      mediumSpeedGenerationsCount -
      fastSpeedGenerationsCount;

    expect(lowSpeedGenerationsCount).toBeLessThan(mediumSpeedGenerationsCount);
    expect(mediumSpeedGenerationsCount).toBeLessThan(fastSpeedGenerationsCount);
    expect(pauseGenerationsCount).toBe(0);
  });

  it("changing game size does not delete filled cell", () => {
    const { result } = renderHook(() => useGame());

    act(() => result.current.onClick([29, 29]));
    expect(result.current.field[29][29]).toBe(1);

    act(() => result.current.setGameSize("medium"));
    expect(result.current.field[29][29]).toBe(1);

    act(() => result.current.setGameSize("big"));
    expect(result.current.field[29][29]).toBe(1);

    act(() => result.current.setGameSize("small"));
    expect(result.current.field[29][29]).toBe(1);
  });

  it("onClick changes cell state to opposite", () => {
    const { result } = renderHook(() => useGame());

    expect(result.current.onClick).toBeInstanceOf(Function);

    act(() => result.current.onClick([9, 10]));
    checkTheOnlyCellIsAlive(result.current.field, 9, 10);
    act(() => result.current.onClick([9, 10]));
    checkEmptyField(result.current.field, 30, 30);
  });

  it("setDensity generates different count of living cells", () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.setGameSize("big"));

    expect(countAliveCells(result.current.field)).toBe(0);

    act(() => result.current.setDensity("low"));
    const lowDensityCellsCount = countAliveCells(result.current.field);
    act(() => result.current.setDensity("medium"));
    const mediumDensityCellsCount = countAliveCells(result.current.field);
    act(() => result.current.setDensity("high"));
    const highDensityCellsCount = countAliveCells(result.current.field);
    act(() => result.current.clearField());

    expect(lowDensityCellsCount).toBeLessThan(mediumDensityCellsCount);
    expect(mediumDensityCellsCount).toBeLessThan(highDensityCellsCount);
    expect(countAliveCells(result.current.field)).toBe(0);
  });

  it("Change of cell generations works correctly", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useGame());

    act(() => result.current.onClick([1, 0]));
    act(() => result.current.onClick([2, 1]));
    act(() => result.current.onClick([0, 2]));
    act(() => result.current.onClick([1, 2]));
    act(() => result.current.onClick([2, 2]));
    act(() => result.current.setGameSpeed("fast"));
    act(() => {
      jest.runOnlyPendingTimers();
    });
    act(() => {
      jest.runOnlyPendingTimers();
    });
    act(() => {
      jest.runOnlyPendingTimers();
    });
    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(result.current.field[1][2]).toBe(1);
    expect(result.current.field[2][3]).toBe(1);
    expect(result.current.field[3][1]).toBe(1);
    expect(result.current.field[3][2]).toBe(1);
    expect(result.current.field[3][3]).toBe(1);
    expect(countAliveCells(result.current.field)).toBe(5);
    expect(result.current.generationNumber).toBe(4);
  });
});
