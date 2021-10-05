import React from "react";
import { FC } from "react";
import { CellProps } from "../../types/field";

export const Cell: FC<CellProps> = ({ coords, state, onClick }) => (
  <div
    css={{
      backgroundColor: state ? "green" : "red",
      width: 50,
      height: 50,
      border: "solid",
      borderWidth: 1,
    }}
    onClick={() => onClick(coords)}
    data-testid={`${coords}`}
  >
    {`${coords}`}
  </div>
);
