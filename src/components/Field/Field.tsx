import React from "react";
import { FC } from "react";
import { useGame } from "@/hooks/useGame";
import { Grid } from "@/components/Grid/Grid";
import { GameControls } from "@/components/GameControls/GameControls";

export const Field: FC = () => {
  const {
    field,
    onClick,
    gameSize,
    setGameSize,
    setGameSpeed,
    gameSpeed,
    generationNumber,
    setDensity,
    clearField,
  } = useGame();
  return (
    <div>
      <Grid field={field} onClick={onClick} cellSize={gameSize} />
      <GameControls
        {...{
          setGameSize,
          gameSize,
          setGameSpeed,
          gameSpeed,
          generationNumber,
          setDensity,
          clearField,
        }}
      />
    </div>
  );
};
