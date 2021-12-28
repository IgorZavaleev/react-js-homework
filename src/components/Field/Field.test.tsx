import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Field } from "@/components/Field/Field";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  render(<Field />);
});

describe("Field component check. Game control buttons do right things.", () => {
  it("Field size buttons", async () => {
    expect(screen.queryByTestId("cell_89_89_dead")).toBeNull();
    expect(screen.queryByTestId("cell_59_59_dead")).toBeNull();
    expect(screen.getByTestId("cell_29_29_dead")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("FieldSizeButtonMedium"));
    expect(screen.queryByTestId("cell_89_89_dead")).toBeNull();
    expect(screen.getByTestId("cell_59_59_dead")).toBeInTheDocument();
    expect(screen.getByTestId("cell_29_29_dead")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("FieldSizeButtonBig"));
    expect(screen.getByTestId("cell_89_89_dead")).toBeInTheDocument();
    expect(screen.getByTestId("cell_59_59_dead")).toBeInTheDocument();
    expect(screen.getByTestId("cell_29_29_dead")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("FieldSizeButtonSmall"));
    expect(screen.queryByTestId("cell_89_89_dead")).toBeNull();
    expect(screen.queryByTestId("cell_59_59_dead")).toBeNull();
    expect(screen.getByTestId("cell_29_29_dead")).toBeInTheDocument();
  });

  it("Game speed buttons start generations change and increment generations counter", async () => {
    fireEvent.click(screen.getByTestId("cell_0_0_dead"));
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByTestId("cell_0_0_alive")).toBeInTheDocument();
    expect(screen.getByTestId("GenerationNumber")).toHaveTextContent("0");

    fireEvent.click(screen.getByTestId("GameSpeedButtonSlow"));
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByTestId("cell_0_0_dead")).toBeInTheDocument();
    expect(screen.getByTestId("GenerationNumber")).toHaveTextContent("1");

    fireEvent.click(screen.getByTestId("GameSpeedButtonMedium"));
    fireEvent.click(screen.getByTestId("cell_0_0_dead"));
    expect(screen.getByTestId("cell_0_0_alive")).toBeInTheDocument();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByTestId("cell_0_0_dead")).toBeInTheDocument();
    expect(screen.getByTestId("GenerationNumber")).toHaveTextContent("2");

    fireEvent.click(screen.getByTestId("GameSpeedButtonFast"));
    fireEvent.click(screen.getByTestId("cell_0_0_dead"));
    expect(screen.getByTestId("cell_0_0_alive")).toBeInTheDocument();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByTestId("cell_0_0_dead")).toBeInTheDocument();
    expect(screen.getByTestId("GenerationNumber")).toHaveTextContent("3");

    fireEvent.click(screen.getByTestId("GameSpeedButtonPause"));
    fireEvent.click(screen.getByTestId("cell_0_0_dead"));
    expect(screen.getByTestId("cell_0_0_alive")).toBeInTheDocument();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByTestId("cell_0_0_alive")).toBeInTheDocument();
    expect(screen.getByTestId("GenerationNumber")).toHaveTextContent("3");
  });

  it("Game speed buttons make different number of generations during the same period of time", async () => {
    fireEvent.click(screen.getByTestId("GameSpeedButtonSlow"));
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    const slowSpeedGenerationsCount = parseInt(
      screen.getByTestId("GenerationNumber").textContent ?? ""
    );

    fireEvent.click(screen.getByTestId("GameSpeedButtonMedium"));
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    const mediumSpeedGenerationsCount =
      parseInt(screen.getByTestId("GenerationNumber").textContent ?? "") -
      slowSpeedGenerationsCount;

    fireEvent.click(screen.getByTestId("GameSpeedButtonFast"));
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    const fastSpeedGenerationsCount =
      parseInt(screen.getByTestId("GenerationNumber").textContent ?? "") -
      mediumSpeedGenerationsCount;

    expect(slowSpeedGenerationsCount).toBeLessThan(mediumSpeedGenerationsCount);
    expect(mediumSpeedGenerationsCount).toBeLessThan(fastSpeedGenerationsCount);
  });

  it("Density buttons", async () => {
    fireEvent.click(screen.getByTestId("ClearFieldButton"));
    fireEvent.click(screen.getByTestId("DensityButtonLow"));
    const lowDensityCellsCount = screen.queryAllByTestId("alive", {
      exact: false,
    }).length;

    fireEvent.click(screen.getByTestId("ClearFieldButton"));
    fireEvent.click(screen.getByTestId("DensityButtonMedium"));
    const mediumDensityCellsCount = screen.queryAllByTestId("alive", {
      exact: false,
    }).length;

    fireEvent.click(screen.getByTestId("ClearFieldButton"));
    fireEvent.click(screen.getByTestId("DensityButtonHigh"));
    const highDensityCellsCount = screen.queryAllByTestId("alive", {
      exact: false,
    }).length;

    expect(lowDensityCellsCount).toBeLessThan(mediumDensityCellsCount);
    expect(mediumDensityCellsCount).toBeLessThan(highDensityCellsCount);
  });
});
