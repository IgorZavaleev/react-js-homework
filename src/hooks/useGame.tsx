import React, { useEffect, useState } from "react";
import { settings } from "@/settings/settings";
import {
  GameSize,
  FieldType,
  GameState,
  Coords,
  GameSpeed,
  Density,
} from "@/types/field";
import { countStep } from "@/functions/countStep";

export const generateEmptyField = ([rows, columns]: [
  number,
  number
]): FieldType => {
  return new Array(rows).fill(null).map(() => new Array(columns).fill(0));
};

export const generateRandomField = (
  field: FieldType,
  density: Density
): FieldType => {
  return field.map((row, y) =>
    row.map((cellState, x) => {
      return cellState || Math.random() * 100 < settings["density"][density]
        ? 1
        : 0;
    })
  );
};

export const changeCell = (
  field: FieldType,
  cellX: number,
  cellY: number
): FieldType => {
  return field.map((row, y) =>
    row.map((cellState, x) => {
      return cellX === x && cellY === y ? (cellState === 1 ? 0 : 1) : cellState;
    })
  );
};

export const useGame = (): GameState => {
  const [gameSize, setGameSize] = useState<GameSize>("small");
  const [gameSpeed, setGameSpeed] = useState<GameSpeed>("pause");
  const [generationNumber, setGenerationNumber] = useState<number>(0);

  const [field, setField] = useState<FieldType>(
    generateEmptyField(settings["fieldSize"][gameSize])
  );

  useEffect(() => {
    if (gameSpeed !== "pause") {
      const timer = setInterval(() => {
        step();
      }, settings["stepInterval"][gameSpeed]);
      return () => clearInterval(timer);
    }
  });

  const fieldRef = React.useRef<FieldType>();
  fieldRef.current = field;

  const onClick = ([x, y]: Coords) => {
    setField(changeCell(fieldRef.current!, x, y));
  };

  const onChangeGameSize = (newGameSize: GameSize) => {
    if (newGameSize !== gameSize) {
      const newField = generateEmptyField(settings["fieldSize"][newGameSize]);

      field.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (newField?.[y]?.[x] === 0) {
            newField[y][x] = cell;
          }
        });
      });
      setGameSize(newGameSize);
      setField(newField);
    }
  };

  const step = () => {
    setField(countStep(fieldRef.current!));
    setGenerationNumber(generationNumber + 1);
  };

  const setDensity = (density: Density) => {
    setField(generateRandomField(field, density));
  };

  const clearField = () =>
    setField(generateEmptyField(settings["fieldSize"][gameSize]));

  return {
    field,
    onClick,
    gameSize,
    setGameSize: onChangeGameSize,
    setGameSpeed,
    gameSpeed,
    generationNumber,
    setDensity,
    clearField,
  };
};
