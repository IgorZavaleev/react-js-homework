import { Density, GameSize, GameSpeed } from "@/types/field";

type Settings = {
  fieldSize: Record<GameSize, [number, number]>;
  cellSize: Record<GameSize, [number, number]>;
  density: Record<Density, number>;
  stepInterval: Partial<Record<GameSpeed, number>>;
};

export const settings: Settings = {
  fieldSize: {
    small: [30, 30],
    medium: [60, 60],
    big: [90, 90],
  },
  cellSize: {
    small: [22, 22],
    medium: [10, 10],
    big: [6, 6],
  },
  density: {
    low: 10,
    medium: 20,
    high: 40,
  },
  stepInterval: {
    slow: 1000,
    medium: 200,
    fast: 1,
  },
};
