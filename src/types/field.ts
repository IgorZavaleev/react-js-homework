export type Coords = [number, number];

export type CellProps = {
  coords: Coords;
  state: CellState;
  onClick: onClickType;
};

export type CellState = 0 | 1;

export type FieldType = CellState[][];
export type onClickType = (coords: Coords) => void;

export type GameState = {
  field: FieldType;
  onClick: onClickType;
};
