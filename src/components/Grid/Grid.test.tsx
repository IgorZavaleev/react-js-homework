import React from "react";
import { render } from "@testing-library/react";

import { Grid, GridProps } from "./Grid";
import { FieldType } from "@/types/field";

const MockFieldData: FieldType = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 1],
];

describe("Grid component check", () => {
  it("Grid renders correctly", () => {
    const props: GridProps = {
      onClick: jest.fn(),
      field: MockFieldData,
      cellSize: "small",
    };

    const { asFragment } = render(<Grid {...props}>{MockFieldData}</Grid>);

    expect(asFragment()).toMatchSnapshot();
  });
});
