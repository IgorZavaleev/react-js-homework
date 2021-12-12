import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Cell } from "./Cell";
import { CellProps, Coords } from "@/types/field";

describe("Cell component check", () => {
  const coords: Coords = [1, 1];

  const props: CellProps = {
    coords: coords,
    state: 1,
    onClick: jest.fn(),
    size: "small",
  };

  it("Cell renders correctly", () => {
    const { asFragment } = render(<Cell {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("onClick should be called", () => {
    render(<Cell {...props} />);

    const cellComp = screen.getByTestId(`cell_${coords[0]}_${coords[1]}_alive`);
    fireEvent.click(cellComp);

    expect(props.onClick).toBeCalled();
  });
});
