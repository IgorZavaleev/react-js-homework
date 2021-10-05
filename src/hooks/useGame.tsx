import { useState } from "react";
import { getSettings } from "../settings/settings";
import { FieldType, GameState } from "../types/field";

const generateEmptyField = ([rows, columns]) =>
  new Array(rows).fill(null).map(() => new Array(columns).fill(0));

const changeCell = (
  field: FieldType,
  cellX: number,
  cellY: number
): FieldType => {
  return field.map((row, y) =>
    row.map((cellState, x) =>
      cellX === x && cellY === y ? (cellState === 1 ? 0 : 1) : cellState
    )
  );
};

export const useGame = (): GameState => {
  const [field, setField] = useState(
    generateEmptyField(getSettings()["fieldSize"])
  );
  const onClick = ([x, y]) => {
    setField(changeCell(field, x, y));
  };

  return {
    field,
    onClick,
  };
};
