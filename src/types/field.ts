export type Coords = [number, number];

export type CellProps = {
  coords: Coords;
  state: CellState;
  onClick: onClickType;
  size: GameSize;
};

export type GameSize = "small" | "medium" | "big";
export type Density = "low" | "medium" | "high";
export type GameSpeed = "pause" | "slow" | "medium" | "fast";

export type CellState = 0 | 1;

export type FieldType = CellState[][];
export type onClickType = (coords: Coords) => void;

export type GameState = {
  field: FieldType;
  onClick: onClickType;
  setGameSize: (gameSize: GameSize) => void;
  gameSize: GameSize;
  setGameSpeed: (gameSpeed: GameSpeed) => void;
  gameSpeed: GameSpeed;
  generationNumber: number;
  setDensity: (density: Density) => void;
  clearField: () => void;
};
