import React from "react";
import { FC } from "react";
import { CellProps } from "@/types/field";
import { settings } from "@/settings/settings";

export const Cell: FC<CellProps> = React.memo(
  ({ coords, state, onClick, size }) => {
    const [width, height] = settings["cellSize"][size];
    const borderColorAlpha =
      size === "big" ? 0.2 : size === "medium" ? 0.25 : 0.2;
    return (
      <div
        css={{
          backgroundColor: state ? "green" : "red",
          width: width,
          height: height,
          border: "solid",
          borderWidth: 1,
          borderColor: `rgba(0,0,0,${borderColorAlpha})`,
        }}
        onClick={() => onClick(coords)}
        data-testid={`cell_${coords[0]}_${coords[1]}_${
          state ? "alive" : "dead"
        }`}
      />
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.state === nextProps.state && prevProps.size === nextProps.size
    );
  }
);
