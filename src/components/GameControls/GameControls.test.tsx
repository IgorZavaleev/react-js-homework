import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GameControls } from "@/components/GameControls/GameControls";

describe("GameControls component check", () => {
  it("Buttons call right functions", async () => {
    const setGameSize = jest.fn();
    const setGameSpeed = jest.fn();
    const setDensity = jest.fn();
    const clearField = jest.fn();
    render(
      <GameControls
        {...{ setGameSize, setGameSpeed, setDensity, clearField }}
      />
    );
    fireEvent.click(screen.getByTestId("FieldSizeButtonSmall"));
    expect(setGameSize).toHaveBeenCalledWith("small");
    fireEvent.click(screen.getByTestId("FieldSizeButtonMedium"));
    expect(setGameSize).toHaveBeenCalledWith("medium");
    fireEvent.click(screen.getByTestId("FieldSizeButtonBig"));
    expect(setGameSize).toHaveBeenCalledWith("big");

    fireEvent.click(screen.getByTestId("GameSpeedButtonSlow"));
    expect(setGameSpeed).toHaveBeenCalledWith("slow");
    fireEvent.click(screen.getByTestId("GameSpeedButtonMedium"));
    expect(setGameSpeed).toHaveBeenCalledWith("medium");
    fireEvent.click(screen.getByTestId("GameSpeedButtonFast"));
    expect(setGameSpeed).toHaveBeenCalledWith("fast");
    fireEvent.click(screen.getByTestId("GameSpeedButtonPause"));
    expect(setGameSpeed).toHaveBeenCalledWith("pause");

    fireEvent.click(screen.getByTestId("ClearFieldButton"));
    expect(clearField).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId("DensityButtonLow"));
    expect(setDensity).toHaveBeenCalledWith("low");
    fireEvent.click(screen.getByTestId("DensityButtonMedium"));
    expect(setDensity).toHaveBeenCalledWith("medium");
    fireEvent.click(screen.getByTestId("DensityButtonHigh"));
    expect(setDensity).toHaveBeenCalledWith("high");
  });
});
