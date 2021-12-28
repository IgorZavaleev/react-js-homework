import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button component check", () => {
  it("Button calls onClick function", async () => {
    const handleClick = jest.fn();
    render(<Button caption="TestButton" onClick={handleClick} />);
    const button = screen.getByText("TestButton");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Disabled button doesn't call onClick function", async () => {
    const handleClick = jest.fn();
    render(
      <Button caption="TestButton" disabled={true} onClick={handleClick} />
    );
    const button = screen.getByText("TestButton");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
