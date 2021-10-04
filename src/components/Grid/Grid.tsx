import React from "react";
import { FC } from "react";
import { FieldType } from "../../types/field";
import { Cell } from "../Cell/Cell";
import { onClickType } from "../../types/field";
import styled from "@emotion/styled";

interface WrapperProps {
  size: number;
}

const RowWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
`;

const GridWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
`;

export type GridProps = { field: FieldType; onClick: onClickType };

export const Grid: FC<GridProps> = ({ field, onClick }) => (
  <GridWrapper>
    {field.map((row, y) => (
      <RowWrapper key={`${y}`}>
        {row.map((cell, x) => (
          <Cell
            key={`${x}_${y}`}
            coords={[x, y]}
            state={cell}
            onClick={onClick}
          />
        ))}
      </RowWrapper>
    ))}
  </GridWrapper>
);
