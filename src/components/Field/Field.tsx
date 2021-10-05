import React from "react";
import { FC } from "react";
import { useGame } from "../../hooks/useGame";
import { Grid } from "../Grid/Grid";

export const Field: FC = () => {
  const { field, onClick } = useGame();
  return <Grid field={field} onClick={onClick} />;
};
