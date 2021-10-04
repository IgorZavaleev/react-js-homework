import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Cell } from "./Cell";
import { CellProps } from "../../types/field";

describe("Cell component check", () => {
  const coords = [1, 1];

  const props: CellProps = {
    coords: coords,
    state: 1,
    onClick: jest.fn(),
  };

  it("Cell renders correctly", () => {
    const { asFragment } = render(<Cell {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("onClick should be called", () => {
    render(<Cell {...props} />);

    const cellComp = screen.getByTestId(`${coords}`);
    fireEvent.click(cellComp);

    expect(props.onClick).toBeCalled();
  });
});
