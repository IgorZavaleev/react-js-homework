import { CellState, FieldType } from "@/types/field";

const getCellState = (field: FieldType, x: number, y: number): CellState => {
  return field?.[y]?.[x] === 1 ? 1 : 0;
};

export const countNeighbours = (
  field: FieldType,
  x: number,
  y: number
): number =>
  getCellState(field, x - 1, y - 1) +
  getCellState(field, x, y - 1) +
  getCellState(field, x + 1, y - 1) +
  getCellState(field, x - 1, y) +
  getCellState(field, x + 1, y) +
  getCellState(field, x - 1, y + 1) +
  getCellState(field, x, y + 1) +
  getCellState(field, x + 1, y + 1);

export const countNewCellState = (
  neighboursCount: number,
  currentCellState: CellState
): CellState =>
  currentCellState
    ? neighboursCount === 2 || neighboursCount === 3
      ? 1
      : 0
    : neighboursCount === 3
    ? 1
    : 0;

export const countStep: (field: FieldType) => FieldType = (field) =>
  field.map((row, y) =>
    row.map((cell, x) => countNewCellState(countNeighbours(field, x, y), cell))
  );
